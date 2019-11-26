import React from "react";
import Page from "site/components/Page";
import { List, ListItem, Icon } from "weui-react";

const MR = { marginRight: "10px" };

function ListDemo() {
    return (
        <Page title="List" introduce="列表">
            <List title="带说明的列表">
                <ListItem footer="说明文字">标题文字</ListItem>
                <ListItem footer="说明文字">标题文字</ListItem>
            </List>
            <List title="带图标，说明的列表">
                <ListItem head={<Icon icon="safe-success" style={MR} />} footer="说明文字">
                    标题文字
                </ListItem>
                <ListItem head={<Icon icon="safe-success" style={MR} />} footer="说明文字">
                    标题文字
                </ListItem>
            </List>
            <List title="带跳转的列表">
                <ListItem arrow={true} footer="说明文字">
                    标题文字
                </ListItem>
                <ListItem arrow={true} footer="说明文字">
                    标题文字
                </ListItem>
            </List>
            <List title="带图标，说明, 跳转的列表">
                <ListItem arrow={true} head={<Icon icon="safe-success" style={MR} />} footer="说明文字">
                    标题文字
                </ListItem>
                <ListItem arrow={true} head={<Icon icon="safe-success" style={MR} />} footer="说明文字">
                    标题文字
                </ListItem>
            </List>
        </Page>
    );
}

export default React.memo(ListDemo);
