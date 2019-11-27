import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Checkbox, Countdown, FormItem, Form, InputItem, CheckboxItem, ListGroup, Switch, SwitchItem } from "weui-react";

function SwitchDemo({ history }: RouteComponentProps) {
    return (
        <Form
            title="复选框样式"
            opr={
                <Button type="primary" onClick={() => history.goBack()}>
                    返回
                </Button>
            }
        >
            <ListGroup>
                <SwitchItem prop="switch" label="标题文字">
                    <Switch />
                </SwitchItem>
            </ListGroup>
        </Form>
    );
}

export default withRouter(SwitchDemo);
