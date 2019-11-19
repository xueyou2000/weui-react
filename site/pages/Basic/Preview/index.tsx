import React from "react";
import Page from "site/components/Page";
import { Preview, PreviewItem, PreviewButton } from "weui-react";

function PreviewDemo() {
    return (
        <Page className="preview-demo" title="Preview" introduce="表单预览">
            <Preview subTitle="付款金额" title="¥2400.00" footer={<PreviewButton key="c">操作</PreviewButton>}>
                <PreviewItem title="商品">电动打单机</PreviewItem>
                <PreviewItem title="标题标题">名字名字名字</PreviewItem>
                <PreviewItem title="标题标题">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</PreviewItem>
            </Preview>

            <br />

            <Preview subTitle="付款金额" title="¥2400.00" footer={[<PreviewButton key="a">辅助操作</PreviewButton>, <PreviewButton key="b">提交</PreviewButton>]}>
                <PreviewItem title="商品">电动打单机</PreviewItem>
                <PreviewItem title="标题标题">名字名字名字</PreviewItem>
                <PreviewItem title="标题标题">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</PreviewItem>
            </Preview>
        </Page>
    );
}

export default React.memo(PreviewDemo);
