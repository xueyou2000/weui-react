import React from "react";
import Page from "site/components/Page";
import { Grid, GridItem, Icon } from "weui-react";
import "./index.scss";

const data: string[] = [
    "success",
    "safe-success",
    "success-circle",
    "success-no-circle",
    "warn",
    "safe-warn",
    "info",
    "info-circle",
    "waiting",
    "waiting-circle",
    "circle",
    "download",
    "cancel",
    "search",
    "clear",
    "back",
    "delete",
    "arrow",
    "arrow-bold",
    "back-arrow",
    "back-arrow-thin",
    "back-circle",
    "close",
    "close-thin",
];

function IconDemo() {
    return (
        <Page className="icons-demo" title="Icons" introduce="内置图标, 也能配合 @svgr/webpack 传入svg自定义图标">
            <Grid data={data}>{(d, i) => <GridItem label={d} key={d} icon={<Icon icon={d} />} />}</Grid>
        </Page>
    );
}

export default React.memo(IconDemo);
