import React, { useState } from "react";
import Page from "site/components/Page";
import { Dialog, DialogPopup, Button } from "weui-react";
import "./index.scss";

function DialogDemo() {
    const [visible, setVisible] = useState(false);

    function toggle() {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    function pop() {
        DialogPopup({
            footer: ["知道了"],
            children: <div>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>,
        });
    }

    return (
        <Page className="dialog-demo" title="Dialog" introduce="模态对话框">
            <Button type="primary" onClick={toggle}>
                显示
            </Button>

            <Button onClick={pop}>JS调用</Button>

            <Dialog visible={visible} onVisibleChange={setVisible} title="对话框标题" footer={["辅助操作", "主操作"]}>
                弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
            </Dialog>
        </Page>
    );
}

export default React.memo(DialogDemo);
