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
        component: loadComponent(() => import("site/pages/Form/Button")),
        exact: true,
    },
    {
        title: "Form 表单",
        path: "/form",
        component: loadComponent(() => import("site/pages/Form/Form")),
        exact: true,
    },
    {
        title: "Checkbox 复选框",
        path: "/checkbox",
        component: loadComponent(() => import("site/pages/Form/Checkbox")),
        exact: true,
    },
    {
        title: "Switch 开关",
        path: "/switch",
        component: loadComponent(() => import("site/pages/Form/Switch")),
        exact: true,
    },
    {
        title: "DatePicker 日期选择",
        path: "/datePicker",
        component: loadComponent(() => import("site/pages/Form/DatePIcker")),
        exact: true,
    },
    {
        title: "Keyboard 金额键盘",
        path: "/keyboard",
        component: loadComponent(() => import("site/pages/Form/Keyboard")),
        exact: true,
    },
    {
        title: "List 列表",
        path: "/list",
        component: loadComponent(() => import("site/pages/Form/List")),
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
    {
        title: "Badge 徽章",
        path: "/badge",
        component: loadComponent(() => import("site/pages/Basic/Badge")),
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
        component: loadComponent(() => import("site/pages/FeedBack/Actionsheet")),
        exact: true,
    },
    {
        title: "Dialog 模态对话框",
        path: "/dialog",
        component: loadComponent(() => import("site/pages/FeedBack/Dialog")),
        exact: true,
    },
    {
        title: "Half-screen Dialog 半屏对话框",
        path: "/half-screen-dialog",
        component: loadComponent(() => import("site/pages/FeedBack/HalfScreenDialog")),
        exact: true,
    },
    {
        title: "Result 消息结果",
        path: "/result",
        component: loadComponent(() => import("site/pages/FeedBack/Result")),
        exact: true,
    },
    {
        title: "Picker 选择器",
        path: "/picker",
        component: loadComponent(() => import("site/pages/FeedBack/Picker")),
        exact: true,
    },
    {
        title: "Toast 轻提示",
        path: "/toast",
        component: loadComponent(() => import("site/pages/FeedBack/Toast")),
        exact: true,
    },
    {
        title: "Tooptips 工具提示",
        path: "/tooptips",
        component: loadComponent(() => import("site/pages/FeedBack/Tooptips")),
        exact: true,
    },
    {
        title: "Skeleton 骨架屏",
        path: "/skeleton",
        component: loadComponent(() => import("site/pages/FeedBack/Skeleton")),
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
 * 扩展路由
 */
export const ExpandRouteConfig: RouteConfig[] = [
    {
        title: "表单结构",
        path: "/form/structure",
        component: loadComponent(() => import("site/pages/Form/Form/Structure")),
        exact: true,
    },
    {
        title: "表单验证",
        path: "/form/valid",
        component: loadComponent(() => import("site/pages/Form/Form/Validate")),
        exact: true,
    },
    {
        title: "表单方法",
        path: "/form/methods",
        component: loadComponent(() => import("site/pages/Form/Form/Methods")),
        exact: true,
    },
];

/**
 * 全部路由
 */
export default [...FormRouterConfig, ...BaseRouterConfig, ...FeedbackRouterConfig, ...NavRouterConfig, ...SearchRouterConfig, ...SearchRouterConfig, ...ExpandRouteConfig];
