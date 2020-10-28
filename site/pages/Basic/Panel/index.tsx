import React from "react";
import Page from "site/components/Page";
import { Panel, Mediabox, MediaboxMeta, ListItem } from "weui-react";

function PanelDemo() {
    return (
        <Page className="panel-demo" title="Panel" introduce="组合面板">
            <Panel title="图文组合列表">
                <Mediabox title="标题一" compact={true} thumb={require("site/assets/images/icon_tabbar.png")}>
                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </Mediabox>
                <Mediabox title="标题二" compact={true} thumb={require("site/assets/images/icon_tabbar.png")}>
                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </Mediabox>
                <ListItem arrow={true}>
                    <a>查看更多</a>
                </ListItem>
            </Panel>
            <Panel title="文字组合列表">
                <Mediabox title="标题一" text={true}>
                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </Mediabox>
                <Mediabox title="标题二" text={true}>
                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </Mediabox>
            </Panel>

            <Panel title="文字列表附加源">
                <Mediabox
                    title="标题一"
                    text={true}
                    info={
                        <p>
                            <MediaboxMeta>文字来源</MediaboxMeta>
                            <MediaboxMeta>时间</MediaboxMeta>
                            <MediaboxMeta extra={true}>其他信息</MediaboxMeta>
                        </p>
                    }
                >
                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                </Mediabox>
            </Panel>
        </Page>
    );
}

export default React.memo(PanelDemo);
