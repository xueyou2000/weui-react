import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Checkbox, Countdown, Form, InputItem, ListGroup, Toast, TooptipsPopup } from "weui-react";
import { ValidateConfig } from "xy-form/es/ValidateUtils/ValidateInterface";
import { FormSubmitButton } from "xy-form";

interface LoginDto {
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 姓名
     */
    name?: string;
}

const requiredErrorTips = "{{NAME}}必填";

const rule: ValidateConfig<LoginDto> = {
    phone: [{ name: "Required", errMsg: requiredErrorTips }, { name: "PhoneNo" }],
    name: [{ name: "Required", errMsg: requiredErrorTips }],
};

function FormValidateDemo({ history }: RouteComponentProps) {
    function submit(data: LoginDto) {
        console.log(data);
        const stop = Toast.loading("登录中...", 0);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                stop();
                TooptipsPopup({ type: "success", children: "登陆成功" });
                resolve();
            }, 600);
        });
    }

    return (
        <Form
            title="表单标题"
            desc="表单说明"
            validConfig={rule}
            onSubmit={submit}
            opr={
                <React.Fragment>
                    <FormSubmitButton>
                        <Button type="primary">登 录</Button>
                    </FormSubmitButton>
                    <Button onClick={() => history.goBack()}>返回</Button>
                </React.Fragment>
            }
        >
            <ListGroup>
                <InputItem prop="phone" label="手机号" type="number" clearable={true} placeholder="请输入11位手机号" pattern="[0-9]*" maxLength={11} />
                <InputItem prop="name" label="姓名" placeholder="请输入您的真实姓名" />
            </ListGroup>
        </Form>
    );
}

export default withRouter(FormValidateDemo);
