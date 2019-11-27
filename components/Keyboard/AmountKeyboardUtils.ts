/**
 * 删除金额最后一位
 * @param amount 金额字符串
 */
function popAmount(amount: string) {
    if (amount) {
        return amount.slice(0, amount.length - 1);
    } else {
        return amount;
    }
}

/**
 * 寻找小数点
 * @param amount 金额字符串
 */
function findDot(amount: string) {
    return amount.indexOf(".");
}

/**
 * 检测是否超过2位小数
 * @param amount 金额字符串
 */
function testDotBit(amount: string) {
    var dotIndex = findDot(amount);
    if (dotIndex !== -1) {
        // 最多输入2位小数
        if (amount.slice(dotIndex).length > 2) {
            return false;
        }
    }
    return true;
}

/**
 * 拼接金额
 * @param amount
 * @param nextAmount
 */
function spliceAmount(amount: string, nextAmount: string) {
    var amount = String(amount);
    var nextAmount = String(nextAmount);
    return amount + nextAmount;
}

/**
 * 补全尾部0
 */
function appendZero(amount: string) {
    if (amount.slice(amount.length - 1) == ".") {
        return amount + "0";
    } else {
        return amount;
    }
}

/**
 * 去掉金额前缀0
 * @param amount
 */
function removePrefix(amount: string) {
    // 前缀输入多个0, 比如 0001 时， 格式化为一个0
    if (/^(0{2,})/.test(amount)) {
        return amount.replace(/^(0{2,})/, "0");
    }
    // 如果输入 0512 这种 而不是 0.5 这种则格式化去掉前缀0
    if (/^0/.test(amount) && /^0[^\\.]/.test(amount)) {
        return amount.replace(/^0/, "");
    }
    return amount;
}

/**
 * 数字键盘被按下
 * @param amount 当前金额字符串
 * @param code 按下的字符
 */
export function keyboradDown(amount: string, code: string) {
    if (amount === undefined || amount === null) {
        amount = "";
    }
    switch (code) {
        case "clear":
            amount = "";
            break;
        case "backspace":
            amount = popAmount(amount);
            break;
        case ".":
            if (amount == "") {
                amount = "0.";
            } else if (findDot(amount) == -1 && amount.length >= 1) {
                // 确保不能输入多个小数点
                amount = amount + ".";
            }
            break;
        default:
            // 确保只能输入2未小数
            if (testDotBit(amount)) {
                amount = spliceAmount(amount, code);
            }
            break;
    }

    amount = removePrefix(amount);
    return amount;
}
