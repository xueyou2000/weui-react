import React, { useState } from "react";
import Page from "site/components/Page";
import { TooptipsPopup, Button } from "weui-react";

function TooptipsDemo() {
    function success() {
        TooptipsPopup({
            type: "success",
            children: "提交成功",
        });
    }

    function fail() {
        TooptipsPopup({
            type: "fail",
            children: "金额不能为空",
        });
    }

    return (
        <Page title="Tooptips" introduce="在顶部弹出提示, 不打断用户操作.">
            <Button onClick={success}>成功提示</Button>

            <Button onClick={fail}>错误提示</Button>
        </Page>
    );
}

export default React.memo(TooptipsDemo);
