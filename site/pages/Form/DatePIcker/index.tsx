import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, DatePicker, Form, FormItem, ListGroup, PopupDatePicker } from "weui-react";

function DatePickerDemo({ history }: RouteComponentProps) {
    function change(v: any) {
        console.log("onchange", v);
    }

    function show() {
        PopupDatePicker({
            title: "选择日期",
            defaultValue: [2020, 6, 29],
            onConfirm: (vals) => console.log("选择", vals),
        });
    }

    return (
        <Form
            title="日期选择器"
            opr={
                <Button type="primary" onClick={() => history.goBack()}>
                    返回
                </Button>
            }
        >
            <ListGroup>
                <FormItem defaultValue={[2020, 1, 2]} prop="a" label="日期选择" arrow={true}>
                    <DatePicker title="选择日期" placeholder="请选择日期" onConfirm={(vals, label) => console.log("onConfirm ", vals, label)} onChange={change} />
                </FormItem>

                <Button onClick={show}>js弹出</Button>
            </ListGroup>
        </Form>
    );
}

export default withRouter(DatePickerDemo);
