import React, { useRef } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Checkbox, Countdown, Form, InputItem, ListGroup, Toast, TooptipsPopup } from "weui-react";
import { ValidateConfig } from "xy-form/es/ValidateUtils/ValidateInterface";
import { FormSubmitButton, FormRestButton } from "xy-form";
import { FormMethods } from "xy-form/es/interface";

function FormMethodsDemo({ history }: RouteComponentProps) {
    const formMethodsRef = useRef<FormMethods>(null);

    function setAll() {
        formMethodsRef.current.setModel({
            phone: "15566666666",
            name: "全部设置",
        });
    }

    function setName() {
        formMethodsRef.current.setFieldValue("name", "被设置了");
    }

    function getName() {
        Toast.info("姓名为: " + formMethodsRef.current.getFieldValue("name"));
    }

    return (
        <Form
            title="表单标题"
            desc="表单说明"
            getFormMethods={(methods) => (formMethodsRef.current = methods)}
            opr={
                <React.Fragment>
                    <FormRestButton>
                        <Button type="primary">重 置</Button>
                    </FormRestButton>
                    <Button onClick={setAll}>设置整个模型</Button>
                    <Button onClick={setName}>设置单个值</Button>
                    <Button onClick={getName}>获取单个值</Button>

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

export default withRouter(FormMethodsDemo);
