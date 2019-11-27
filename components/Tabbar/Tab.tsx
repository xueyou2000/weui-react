import React from "react";
import Icon from "../Icon";
import "./style";

export interface TabProps {
    /**
     * 内容
     */
    children: React.ReactNode;
    /**
     * 图标
     */
    icon: React.ReactNode;
}

function Tab(props: TabProps) {
    const { children, icon } = props;
    return (
        <React.Fragment>
            {typeof icon === "string" ? <img className="weui-tabbar__icon" src={icon} alt="" /> : <Icon className="weui-tabbar__icon" icon={icon} />}
            <p className="weui-tabbar__label">{children}</p>
        </React.Fragment>
    );
}

export default React.memo(Tab);
