import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Checkbox, Countdown, Form, InputItem, ListGroup } from "weui-react";

function FormStructureDemo({ history }: RouteComponentProps) {
    function sendVerifyCode() {
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 600);
        });
    }

    return (
        <Form
            title="表单标题"
            desc="表单说明"
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
                <InputItem prop="phone" label="手机号" type="number" clearable={true} placeholder="请输入11位手机号" pattern="[0-9]*" maxLength={11} />
                <InputItem
                    prop="code"
                    className="weui-cell_vcode"
                    label="验证码"
                    type="number"
                    pattern="[0-9]*"
                    clearable={true}
                    placeholder="请输入验证码"
                    maxLength={6}
                    footer={
                        <Countdown onStart={sendVerifyCode}>
                            <Button>获取验证码</Button>
                        </Countdown>
                    }
                />
                <InputItem prop="name" label="姓名" placeholder="请输入您的真实姓名" />
            </ListGroup>
        </Form>
    );
}

export default withRouter(FormStructureDemo);
