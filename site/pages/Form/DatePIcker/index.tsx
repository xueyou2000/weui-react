import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, DatePicker, Form, FormItem, ListGroup } from "weui-react";

function DatePickerDemo({ history }: RouteComponentProps) {
    function change(v: any) {
        console.log("onchange", v);
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
                <FormItem defaultValue={[2020, 0, 2]} prop="a" label="日期选择" arrow={true}>
                    <DatePicker title="选择日期" placeholder="请选择日期" onConfirm={(vals, label) => console.log("onConfirm ", vals, label)} onChange={change} />
                </FormItem>
            </ListGroup>
        </Form>
    );
}

export default withRouter(DatePickerDemo);
