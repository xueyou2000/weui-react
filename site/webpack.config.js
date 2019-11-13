const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const packageJson = require("./package.json");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: path.join(__dirname, "components", "index"),
    output: {
        library: packageJson.name,
        libraryTarget: "umd",
        path: path.join(__dirname, "dist"),
        filename: `${packageJson.name}.js`,
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                include: [path.resolve(__dirname, "components")],
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
                loaders: [MiniCssExtractPlugin.loader, require.resolve("css-loader")],
            },
            {
                test: /\.scss$/,
                include: [PATHS.resolveProject("src")],
                loaders: [MiniCssExtractPlugin.loader, require.resolve("css-loader"), require.resolve("sass-loader")],
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
            "@": path.join(__dirname, "components"),
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
    externals: ["react", "react-dom"],
    plugins: [new CleanWebpackPlugin(), new Webpack.HashedModuleIdsPlugin(), new MiniCssExtractPlugin({ filename: "[name].css" }), new OptimizeCSSAssetsPlugin(), new Webpack.optimize.ModuleConcatenationPlugin()],
};

module.exports = (env) => {
    const devMode = !(env && env.prod);
};
