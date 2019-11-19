import { RouteConfig } from "react-router-config";
import loadComponent from "site/components/LoadComponent";
import Home from "site/pages/Home";

/**
 * 表单组件
 */
export const FormRouterConfig: RouteConfig[] = [
    {
        title: "Button 按钮",
        path: "/button",
        component: null,
        exact: true,
    },
    {
        title: "Form 表单",
        path: "/form",
        component: null,
        exact: true,
    },
    {
        title: "List 列表",
        path: "/list",
        component: null,
        exact: true,
    },
];

/**
 * 基础组件
 */
export const BaseRouterConfig: RouteConfig[] = [
    {
        title: "Grid 九宫格",
        path: "/grid",
        component: loadComponent(() => import("site/pages/Basic/Grid")),
        exact: true,
    },
    {
        title: "Icon 图标",
        path: "/icon",
        component: loadComponent(() => import("site/pages/Basic/Icon")),
        exact: true,
    },
    {
        title: "Loadmore 加载更多",
        path: "/loadmore",
        component: loadComponent(() => import("site/pages/Basic/Loadmore")),
        exact: true,
    },
    {
        title: "Panel 面板",
        path: "/panel",
        component: loadComponent(() => import("site/pages/Basic/Panel")),
        exact: true,
    },
    {
        title: "Pewview 表单预览",
        path: "/preview",
        component: loadComponent(() => import("site/pages/Basic/Preview")),
        exact: true,
    },
];

/**
 * 操作反馈组件
 */
export const FeedbackRouterConfig: RouteConfig[] = [
    {
        title: "Actionsheet 弹出式菜单",
        path: "/actionsheet",
        component: null,
        exact: true,
    },
    {
        title: "Dialog 模态对话框",
        path: "/dialog",
        component: null,
        exact: true,
    },
    {
        title: "Half-screen Dialog 半屏对话框",
        path: "/half-screen-dialog",
        component: null,
        exact: true,
    },
    {
        title: "Result 消息结果",
        path: "/result",
        component: null,
        exact: true,
    },
    {
        title: "Picker 选择器",
        path: "/picker",
        component: null,
        exact: true,
    },
    {
        title: "Toast 轻提示",
        path: "/toast",
        component: null,
        exact: true,
    },
];

/**
 * 导航相关组件
 */
export const NavRouterConfig: RouteConfig[] = [
    {
        title: "Tabbar 标签栏",
        path: "/tabbar",
        component: null,
        exact: true,
    },
];

/**
 * 搜索组件
 */
export const SearchRouterConfig: RouteConfig[] = [
    {
        title: "Search 搜索框",
        path: "/search",
        component: null,
        exact: true,
    },
];

/**
 * 全部路由
 */
export default [...FormRouterConfig, ...BaseRouterConfig, ...FeedbackRouterConfig, ...NavRouterConfig, ...SearchRouterConfig, ...SearchRouterConfig];
