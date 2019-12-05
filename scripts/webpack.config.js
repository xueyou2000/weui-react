const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const { findHost } = require("./utils");

module.exports = () => {
    const devMode = !process.env.NODE_ENV;
    console.log(`============= ${process.env.NODE_ENV} ==============`);
    return {
        mode: devMode ? "development" : "production",
        devtool: "source-map",
        entry: path.join(__dirname, "../site", "index.tsx"),
        output: {
            publicPath: devMode ? "/" : "./",
            path: path.join(__dirname, "../site-dest"),
            filename: "js/[name].js",
            chunkFilename: "js/[name].chunk.js",
        },
        devServer: {
            host: process.env.host || findHost(),
            port: process.env.prot || 8080,
            hot: true,
            inline: true,
            open: true,
            quiet: true,
            overlay: true,
        },
        module: {
            rules: [
                {
                    test: /\.(ts)x?$/,
                    include: [path.resolve(__dirname, "../components"), path.resolve(__dirname, "../site")],
                    use: {
                        loader: require.resolve("awesome-typescript-loader"),
                        options: {
                            useCache: true,
                            reportFiles: ["components/**/*.{ts,tsx}"],
                            cacheDirectory: "./node_modules/.awcache,",
                            forceIsolatedModules: true,
                        },
                    },
                },
                {
                    test: /\.css$/,
                    loaders: devMode ? ["style-loader", "css-loader"] : [MiniCssExtractPlugin.loader, "css-loader"],
                },
                {
                    test: /\.scss$/,
                    include: [path.resolve(__dirname, "../site")],
                    loaders: devMode ? ["style-loader", "css-loader", "sass-loader"] : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                },
                {
                    test: /\.scss$/,
                    include: [path.resolve(__dirname, "../components")],
                    loaders: devMode
                        ? [
                              "style-loader",
                              "css-loader",
                              "sass-loader",
                              {
                                  loader: require.resolve("postcss-loader"),
                                  options: {
                                      config: {
                                          path: path.resolve(__dirname),
                                      },
                                  },
                              },
                          ]
                        : [
                              MiniCssExtractPlugin.loader,
                              "css-loader",
                              "sass-loader",
                              {
                                  loader: require.resolve("postcss-loader"),
                                  options: {
                                      config: {
                                          path: path.resolve(__dirname),
                                      },
                                  },
                              },
                          ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loaders: require.resolve("file-loader"),
                    options: {
                        limit: 100,
                        name: "images/[name].[hash:7].[ext]",
                    },
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: require.resolve("file-loader"),
                    options: {
                        limit: 100,
                        name: "media/[name].[hash:7].[ext]",
                    },
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: require.resolve("file-loader"),
                    options: {
                        limit: 100,
                        name: "fonts/[name].[hash:7].[ext]",
                    },
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
            alias: {
                "@": path.join(__dirname, "../site"),
                "weui-react": path.join(__dirname, "../components"),
                site: path.join(__dirname, "../site"),
            },
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "initial",
                        priority: -10,
                    },
                },
            },
        },
        plugins: getPlugins(devMode),
    };
};

/**
 * 获取插件
 * @param {*} devMode
 */
function getPlugins(devMode) {
    const basePlugins = [
        new Webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(devMode ? "development" : "production"),
            "process.env.publicPath": JSON.stringify("/"),
        }),
        new HardSourceWebpackPlugin(),
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "../site/index.html"),
            inject: true,
            publicPath: "/",
            env: devMode ? "development" : "production",
        }),
    ];
    let environmentPlugins;

    if (devMode) {
        environmentPlugins = [new Webpack.HotModuleReplacementPlugin(), new FriendlyErrorsWebpackPlugin()];
    } else {
        environmentPlugins = [
            new CleanWebpackPlugin(),
            new Webpack.HashedModuleIdsPlugin(),
            new MiniCssExtractPlugin({ filename: "css/[name].css" }),
            new OptimizeCSSAssetsPlugin(),
            new Webpack.optimize.ModuleConcatenationPlugin(),
            // new BundleAnalyzerPlugin(),
        ];
    }
    return basePlugins.concat(environmentPlugins);
}
