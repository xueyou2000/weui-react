import React, { useState } from "react";
import { Tab, Tabbar, TabPanelNode, Button } from "weui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const icon = require("site/assets/images/icon_tabbar.png");

function TabbarDemo({ history }: RouteComponentProps) {
    return (
        <Tabbar>
            <TabPanelNode tabKey="home" tab={<Tab icon={icon}>首页</Tab>}>
                首页内容
                <Button type="primary" onClick={() => history.goBack()}>
                    返回
                </Button>
            </TabPanelNode>
            <TabPanelNode tabKey="account" tab={<Tab icon={icon}>账户</Tab>}>
                账户页内容
            </TabPanelNode>
            <TabPanelNode tabKey="owner-customer" tab={<Tab icon={icon}>我的商户</Tab>}>
                商户内容
            </TabPanelNode>
            <TabPanelNode tabKey="owner-agent" tab={<Tab icon={icon}>我的服务商</Tab>}>
                服务商内容
            </TabPanelNode>
        </Tabbar>
    );
}

export default withRouter(TabbarDemo);
