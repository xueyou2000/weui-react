import React, { useState } from "react";
import Page from "site/components/Page";
import { Toast, Button } from "weui-react";

function ToastDemo() {
    function success() {
        Toast.success("提交成功");
    }
    function fail() {
        Toast.fail("系统异常");
    }
    function info() {
        Toast.info("本周末将关闭交易");
    }
    function loading() {
        Toast.loading("请稍后");
    }

    return (
        <Page title="Toast" introduce="轻提示">
            <Button onClick={success}>成功提示</Button>

            <Button onClick={fail}>失败提示</Button>

            <Button onClick={info}>普通提示</Button>

            <Button onClick={loading}>加载中</Button>
        </Page>
    );
}

export default React.memo(ToastDemo);
