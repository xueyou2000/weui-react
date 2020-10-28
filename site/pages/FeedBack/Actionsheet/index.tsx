import React, { useState } from "react";
import Page from "site/components/Page";
import { Actionsheet, ActionsheetPopup, Button } from "weui-react";

function ActionsheetDemo() {
    const [visible, setVisible] = useState(false);

    function toggle() {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    function pop() {
        ActionsheetPopup({
            title: "是否解除绑定?",
            menus: ["确定"],
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
        <Page title="Actionsheet" introduce="弹出式菜单">
            <Button type="primary" onClick={toggle}>
                显示
            </Button>

            <Button onClick={pop}>JS调用</Button>

            <Actionsheet visible={visible} onVisibleChange={setVisible} title="弹出框标题" menus={["菜单1", "确定"]} />
        </Page>
    );
}

export default React.memo(ActionsheetDemo);
