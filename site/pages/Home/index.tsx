import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { BaseRouterConfig, FeedbackRouterConfig, FormRouterConfig, NavRouterConfig, SearchRouterConfig } from "site/application/RouteConfig";
import Page from "site/components/Page";
import "./index.scss";
import Menu, { MenuItemConfig } from "./Menu";

const MenuConfig: MenuItemConfig[] = [
    {
        title: "表单",
        icon: require("site/assets/images/icon_nav_form.png"),
        menus: FormRouterConfig,
    },
    {
        title: "基础组件",
        icon: require("site/assets/images/icon_nav_layout.png"),
        menus: BaseRouterConfig,
    },
    {
        title: "操作反馈",
        icon: require("site/assets/images/icon_nav_feedback.png"),
        menus: FeedbackRouterConfig,
    },
    {
        title: "导航相关",
        icon: require("site/assets/images/icon_nav_nav.png"),
        menus: NavRouterConfig,
    },
    {
        title: "搜索相关",
        icon: require("site/assets/images/icon_nav_search.png"),
        menus: SearchRouterConfig,
    },
];

function Home({ history }: RouteComponentProps) {
    const [active, setActive] = useState(null);

    function changeActive(val: string) {
        if (active === val) {
            setActive(null);
        } else {
            setActive(val);
        }
    }

    return (
        <Page
            className="home-page"
            title={<img src={require("site/assets/images/logo.png")} alt="WeUI" height="21px" />}
            introduce="WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。"
        >
            <ul>
                {MenuConfig.map((x) => (
                    <Menu key={x.title} config={x} expand={active === x.title} history={history} onClick={changeActive} />
                ))}
            </ul>
        </Page>
    );
}
export default withRouter(Home);
