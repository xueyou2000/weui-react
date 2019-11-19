import React from "react";
import Page from "site/components/Page";
import { List, ListItem, Badge } from "weui-react";

function Badgedemo() {
    return (
        <Page className="preview-demo" title="Badge" introduce="徽章">
            <List title="新消息提示跟摘要信息后，统一在列表右侧">
                <ListItem
                    arrow={true}
                    footer={
                        <Badge dot={true}>
                            <a href="#">详细信息</a>
                        </Badge>
                    }
                >
                    单行列表
                </ListItem>
            </List>

            <List title="未读数红点跟在主题信息后，统一在列表左侧">
                <ListItem
                    head={
                        <Badge count={8} style={{ marginRight: "15px" }}>
                            <img src={require("site/assets/images/pic_160.png")} style={{ width: "50px", display: "block" }} />
                        </Badge>
                    }
                >
                    <p>联系人名称</p>
                    <p style={{ fontSize: "13px", color: "#888888" }}>摘要信息</p>
                </ListItem>
                <ListItem arrow={true}>
                    <span>单行列表</span>
                    <Badge count={8} overflowCount={99} style={{ marginLeft: "5px" }} />
                </ListItem>
                <ListItem arrow={true} footer="详细信息">
                    <span>单行列表</span>
                    <Badge count={8} positionStyle={{ backgroundColor: "#52c41a" }} style={{ marginLeft: "5px" }} />
                </ListItem>
            </List>
        </Page>
    );
}

export default React.memo(Badgedemo);
