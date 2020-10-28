import React from "react";
import Page from "site/components/Page";
import { Button } from "weui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";

function FormDemo({ history }: RouteComponentProps) {
    return (
        <Page title="Form" introduce="表单, 支持表单验证, 数据设置获取, 表单重置等功能.">
            <Button onClick={() => history.push("/form/structure")}>表单结构</Button>

            <Button onClick={() => history.push("/form/valid")}>表单验证</Button>

            <Button onClick={() => history.push("/form/methods")}>表单方法</Button>
        </Page>
    );
}

export default withRouter(FormDemo);
