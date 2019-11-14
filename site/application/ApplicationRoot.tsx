import { useEffect } from "react";
import { matchRoutes, renderRoutes, RouteConfig } from "react-router-config";
import { RouteComponentProps, withRouter } from "react-router-dom";
import RouteConfigs from "./RouteConfig";
import Home from "site/pages/Home";

const HomeRouterConfig: RouteConfig = {
    title: "weui-react",
    path: "/",
    component: Home,
    exact: true,
};

const AllRoutes = [HomeRouterConfig, ...RouteConfigs];

function ApplicationRoot({ location }: RouteComponentProps) {
    useEffect(() => {
        const breadcrumb = matchRoutes(AllRoutes, location.pathname);
        if (breadcrumb.length > 0) {
            // 获取当前页面配置
            const config = breadcrumb[breadcrumb.length - 1].route;
            // 更新文档标题
            window.document.title = config.title;
        }
    }, [location.pathname]);

    return renderRoutes(AllRoutes, null, { location });
}

export default withRouter(ApplicationRoot);
