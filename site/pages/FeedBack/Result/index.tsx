import React, { useState } from "react";
import Page from "site/components/Page";
import { Result, Button, Preview, PreviewItem, Footer } from "weui-react";
import { withRouter, RouteComponentProps } from "react-router-dom";

function AppFooter() {
    return (
        <Footer links={[<a key="ios">IOS版本</a>, <a key="apk">安卓版本</a>]}>
            <a href="tel:400-860-7199">客服电话: 400-860-7199</a>
            <br />
            Copyright © 2008-2016 weui.io
        </Footer>
    );
}

function ResultDemo({ history }: RouteComponentProps) {
    return (
        <Result
            type="success"
            title="支付成功"
            desc={
                <div>
                    <Preview subTitle="订单金额" title="$12.54">
                        <PreviewItem title="路费">$10.50</PreviewItem>
                        <PreviewItem title="手续费">$2.04</PreviewItem>
                        <PreviewItem title="打赏">$0</PreviewItem>
                    </Preview>
                </div>
            }
            extra={<AppFooter />}
        >
            <Button type="primary" onClick={() => history.goBack()}>
                确定
            </Button>
            <Button onClick={() => history.goBack()}>返回</Button>
        </Result>
    );
}

export default withRouter(ResultDemo);
