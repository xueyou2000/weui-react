import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Checkbox, Countdown, FormItem, Form, InputItem, CheckboxItem, ListGroup } from "weui-react";

function CheckboxDemo({ history }: RouteComponentProps) {
    return (
        <Form
            title="复选框样式"
            opr={
                <Button type="primary" onClick={() => history.goBack()}>
                    返回
                </Button>
            }
            tips={
                <Checkbox className="weui-agree">
                    <span className="weui-agree__text">
                        阅读并同意
                        <a>《相关条款》</a>
                    </span>
                </Checkbox>
            }
        >
            <ListGroup>
                <CheckboxItem prop="checkbox" value="vvv" id="s11">
                    雷电接口
                </CheckboxItem>
                <CheckboxItem prop="checkbox" value="ggg" id="s12">
                    type-c接口
                </CheckboxItem>
            </ListGroup>
        </Form>
    );
}

export default withRouter(CheckboxDemo);
