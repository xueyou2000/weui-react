import React from "react";
import { RouteConfig } from "react-router-config";
import { List, ListItem } from "weui-react";
import classNames from "classnames";

/**
 * 菜单配置
 */
export interface MenuItemConfig {
    /**
     * 标题
     */
    title: string;
    /**
     * 图标
     */
    icon: string;
    /**
     * 路由配置
     */
    menus: RouteConfig[];
}

export interface MenuProps {
    /**
     * 菜单配置
     */
    config: MenuItemConfig;
    /**
     * 是否展开菜单
     */
    expand: boolean;
    /**
     * history实例
     */
    history: any;
    /**
     * 点击菜单事件
     */
    onClick?: (category: string) => void;
}

/**
 * 菜单
 */
function Menu({ config, expand, history, onClick }: MenuProps) {
    return (
        <li className={classNames({ expand })}>
            <div className="category" onClick={() => onClick(config.title)}>
                <p>{config.title}</p>
                <img src={config.icon} alt={config.title} />
            </div>
            <List>
                {[].concat(config.menus).map((x) => (
                    <ListItem key={x.title} head={x.title} arrow={true} onClick={() => history.push(x.path)}></ListItem>
                ))}
            </List>
        </li>
    );
}

export default React.memo(Menu);
