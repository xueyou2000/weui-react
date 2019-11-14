import React from "react";
import "./index.scss";
import classNames from "classnames";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface PageProps extends RouteComponentProps {
    /** 基础类名 */
    prefixCls?: string;
    /** 附加类名*/
    className?: string;
    /** 内联样式 */
    style?: React.CSSProperties;
    /** 标题 */
    title: React.ReactNode;
    /** 介绍 */
    introduce?: React.ReactNode;
    /** 页面内容 */
    children: React.ReactNode;
}

function Page(props: PageProps) {
    const { prefixCls = "page", className, style, title, introduce, history, children } = props;

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            <div className="page__hd">
                <h1 className="page__title">{title}</h1>
                <p className="page__desc">{introduce}</p>
            </div>
            <div className="page__bd">{children}</div>
            <div className="page__ft">
                <a onClick={() => history.goBack()}>
                    <img src={require("site/assets/images/icon_footer.png")} alt="" />
                </a>
            </div>
        </div>
    );
}

export default withRouter(Page);
