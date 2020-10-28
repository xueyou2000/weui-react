import React from "react";
import Page from "site/components/Page";
import { Grid, GridItem } from "weui-react";

const data: string[] = ["我的", "未读消息", "设置", "分享", "注册", "注销", "提现", "账户", "结算卡"];

function GridDemo() {
    return (
        <Page title="Grid" introduce="九宫格,每行3列">
            <Grid data={data}>{(d, i) => <GridItem label={d} key={i} icon={<img src={require("site/assets/images/icon_tabbar.png")} />} />}</Grid>
        </Page>
    );
}

export default React.memo(GridDemo);
