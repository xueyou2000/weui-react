import React, { useState } from "react";
import Page from "site/components/Page";
import { HalfScreenDialog, HalfScreenDialogPopup, Button } from "weui-react";

function HalfScreenDialogDemo() {
    const [visible, setVisible] = useState(false);

    function toggle() {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    function pop() {
        HalfScreenDialogPopup({
            title: "标题",
            children: <p>可放入自定义内容</p>,
            onClick: (index: number) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, 800);
                });
            },
        });
    }

    return (
        <Page title="HalfScreenDialog" introduce="半屏组件">
            <Button type="primary" onClick={toggle}>
                样式一
            </Button>

            <Button onClick={pop}>样式二</Button>

            <HalfScreenDialog
                visible={visible}
                onVisibleChange={setVisible}
                title="弹出框标题"
                footer={[
                    <Button key="cancel">辅助操作</Button>,
                    <Button key="confirm" type="primary">
                        主操作
                    </Button>,
                ]}
            >
                <p className="weui-half-screen-dialog__desc">辅助描述内容，可根据实际需要安排</p>
                <p className="weui-half-screen-dialog__tips">辅助提示内容，可根据实际需要安排</p>
            </HalfScreenDialog>
        </Page>
    );
}

export default React.memo(HalfScreenDialogDemo);
