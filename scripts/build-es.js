const path = require("path");
const globby = require("globby");
const fsPromises = require("fs").promises;
const { mkdirs, spawn } = require("./utils");
const rimraf = require("rimraf");
const chalk = require("chalk");
const ora = require("ora");

(() => {
    const spinner = ora(chalk.white("Compiling es modules...")).start();
    rimraf("es", async (error) => {
        if (error) {
            spinner.fail("删除目录失败" + error.message);
        } else {
            await spawn("npx", ["tsc", "-p", "./components"]);
            const paths = await globby(["components/**/*.scss", "components/**/*.png"], { markDirectories: true, expandDirectories: true });

            for (let i = 0; i < paths.length; ++i) {
                const srcPath = paths[i];
                const destPath = srcPath.replace("components", "es");
                mkdirs(path.dirname(destPath));
                spinner.info(`copy:  ${chalk.green(srcPath)}  ->  ${chalk.green(destPath)}`);
                await fsPromises.copyFile(srcPath, destPath);
            }
            spinner.succeed(chalk.greenBright("Biuld Complete!"));
        }
    });
})();
