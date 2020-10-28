import LocalZh from "./zh";

/**
 * 获取消息对象
 */
export function getLocal(): typeof LocalZh {
    return (window as any).WeuiComponentLocal || LocalZh;
}
