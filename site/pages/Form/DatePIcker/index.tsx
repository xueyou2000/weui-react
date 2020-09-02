import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Button, DatePicker, Form, FormItem, ListGroup, PopupDatePicker } from "weui-react";
import { decreaseDate } from "utils-dom";

function getYearMonthDay(d?: Date) {
    const today = d || new Date();
    return [today.getFullYear(), today.getMonth() + 1, today.getDate()];
}

function DatePickerDemo({ history }: RouteComponentProps) {
    const [date, setDate] = useState(getYearMonthDay(decreaseDate(new Date())));
    const [startDate, setStartDate] = useState(getYearMonthDay(decreaseDate(new Date())));

    function change(v: any) {
        console.log("onchange", v);
    }

    function show() {
        PopupDatePicker({
            title: "选择日期",
            value: startDate,
            end: new Date().getFullYear(),
            onConfirm: setStartDate,
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
            <Button
                type="primary"
                onClick={() => {
                    setDate([2020, 5, 14]);
                }}
            >
                主动设置值
            </Button>
            <ListGroup>
                <FormItem label="日期选择" arrow={true}>
                    <DatePicker
                        value={date}
                        title="选择日期"
                        placeholder="请选择日期"
                        onConfirm={(vals, label) => {
                            console.log("onConfirm ", vals, label);
                            setDate(vals);
                        }}
                        onChange={change}
                    />
                </FormItem>

                <Button onClick={show}>js弹出</Button>
            </ListGroup>
        </Form>
    );
}

export default withRouter(DatePickerDemo);
