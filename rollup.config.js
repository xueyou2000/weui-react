// 显示打包进度
import progress from "rollup-plugin-progress";
// 解析node_modules里的包
import resolve from "rollup-plugin-node-resolve";
// 解析commonjs包
import commonjs from "rollup-plugin-commonjs";
// 解析ts
import typescript from "rollup-plugin-typescript";
// 解析scss
import scss from "rollup-plugin-scss";
// uglify
import { uglify } from "rollup-plugin-uglify";
// clean
import clear from "rollup-plugin-clear";

// 扩展后缀
const extensions = [".js", ".jsx", ".ts", ".tsx", ".scss"];

export default {
    input: "components/index.ts",
    output: {
        file: "dist/weui-react.js",
        format: "umd",
        name: "WeuiReact",
        sourcemap: true,
        globals: {
            react: "React",
        },
    },
    external: ["react"],
    plugins: [
        clear({
            targets: ["dist"],
        }),
        scss({
            output: "dist/weui-react.css",
            outputStyle: "compressed",
            sourceMap: true,
        }),
        resolve({
            jsnext: true,
            extensions,
        }),
        commonjs({
            include: "node_modules/**",
        }),
        typescript(),
        copy({
            targets: [
                {
                    src: "components/**/*.scss",
                    dest: "es",
                },
            ],
            verbose: true,
            expandDirectories: true,
            markDirectories: true,
        }),
        uglify(),
        progress({ clearLine: true }),
    ],
};
