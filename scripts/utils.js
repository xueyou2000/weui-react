const path = require("path");
const fs = require("fs");
const os = require("os");
const spawn = require("cross-spawn");

/**
 * 递归创建目录
 * @param {*} dirname
 */
function mkdirs(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirs(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

/**
 * spawn执行命令
 * @param {*} command
 * @param {*} args
 * @param {*} options
 */
function spawnPromise(command, args, options) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, options);
        child.on("close", (code) => {
            if (code !== 0) {
                reject(new Error(`command: ${command} ${args.toString()}`));
            } else {
                resolve();
            }
        });
        child.on("error", (err) => {
            reject(err);
        });
    });
}

/**
 * 获取内网ip
 */
function findHost() {
    var ifaces = os.networkInterfaces();
    var host = null;

    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details, alias) {
            if (details.family == "IPv4" && details.address.indexOf("127") === -1) {
                host = details.address;
            }
        });
    }

    return host;
}

module.exports = { mkdirs, spawn: spawnPromise, findHost };
