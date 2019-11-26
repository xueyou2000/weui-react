import React from "react";
import Page from "site/components/Page";
import { Button } from "weui-react";
import "./index.scss";

function ButtonDemo() {
    return (
        <Page className="button-demo" title="Button" introduce="按钮">
            <div className="button-sp-area">
                <Button type="primary">主操作</Button>
                <Button type="primary" loading={true}>
                    主操作
                </Button>
                <Button type="primary" disabled={true}>
                    主操作
                </Button>

                <Button>次要操作</Button>
                <Button loading={true}>次要操作</Button>
                <Button disabled={true}>次要操作</Button>

                <Button type="danger">警告操作</Button>
                <Button type="danger" loading={true}>
                    警告操作
                </Button>
                <Button type="danger" disabled={true}>
                    警告操作
                </Button>
            </div>
        </Page>
    );
}

export default React.memo(ButtonDemo);
