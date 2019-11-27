import React, { useState } from "react";
import Page from "site/components/Page";
import { Skeleton, Stripe, Button } from "weui-react";

function SkeletonDemo() {
    return (
        <Page className="dialog-demo" title="Skeleton" introduce="骨架屏, 用于页面加载, 单页面整体布局不变">
            <Skeleton />
        </Page>
    );
}

export default React.memo(SkeletonDemo);
