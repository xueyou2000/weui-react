import React, { useState } from "react";
import Page from "site/components/Page";
import { Picker, PickerListItem, PickerPanel, Button, FormItem, Form } from "weui-react";
import { PickerItem } from "../../../../components/Picker/Picker";

// 级联数据
const pickerData: PickerItem[] = [
    {
        label: "票据",
        value: 0,
        children: [
            {
                label: "飞机票",
                value: 100,
            },
            {
                label: "火车票",
                value: 101,
                disabled: true,
            },
            {
                label: "的士票",
                value: 102,
            },
            {
                label: "打印票",
                value: 103,
            },
        ],
    },
    {
        label: "费用",
        value: 2,
        children: [
            {
                label: "住宿费",
                value: 200,
            },
            {
                label: "礼品费",
                value: 201,
                disabled: true,
            },
            {
                label: "活动费",
                value: 202,
            },
            {
                label: "通讯费",
                value: 203,
            },
            {
                label: "补助",
                value: 204,
            },
        ],
    },
];

// 单列数据
const pickerDataA: PickerItem[] = [
    {
        label: "飞机票",
        value: 0,
    },
    {
        label: "火车票(disabled)",
        disabled: true,
        value: 1,
    },
    {
        label: "的士票",
        value: 2,
    },
    {
        label: "住宿费",
        value: 3,
    },
    {
        label: "礼品费(disabled)",
        value: 4,
        disabled: true,
    },
    {
        label: "活动费",
        value: 5,
    },
    {
        label: "通讯费",
        value: 6,
    },
    {
        label: "补助",
        value: 7,
    },
    {
        label: "通讯费",
        value: 8,
    },
    {
        label: "其他",
        value: 9,
    },
];

// 双列数据
const pickerDataB: PickerItem[][] = [
    [
        {
            label: "飞机票",
            value: 100,
        },
        {
            label: "火车票",
            value: 101,
            disabled: true,
        },
        {
            label: "的士票",
            value: 102,
        },
        {
            label: "打印票",
            value: 103,
        },
    ],
    [
        {
            label: "住宿费",
            value: 200,
        },
        {
            label: "礼品费",
            value: 201,
            disabled: true,
        },
        {
            label: "活动费",
            value: 202,
        },
        {
            label: "通讯费",
            value: 203,
        },
        {
            label: "补助",
            value: 204,
        },
    ],
];

function PickerDemo() {
    return (
        <Page className="dialog-demo" title="Picker" introduce="选择器">
            <Form
                title="选择器"
                desc="单列和多列支付"
                opr={
                    <React.Fragment>
                        <Button type="primary">提交</Button>
                    </React.Fragment>
                }
            >
                <FormItem defaultValue={[3]} prop="merchantType" label="单列Picker" arrow={true}>
                    <PickerPanel cols={1} placeholder="请选择票据类型" title="单列Picker" data={pickerDataA} />
                </FormItem>

                <FormItem defaultValue={[103, 204]} prop="merchantType2" label="双列数据" arrow={true}>
                    <PickerPanel cols={2} placeholder="请选择票据类型" title="双列数据" data={pickerDataB} />
                </FormItem>

                <FormItem defaultValue={[2, 202]} prop="merchantType3" label="级联数据" arrow={true}>
                    <PickerPanel cascade={true} cols={2} placeholder="请选择票据类型" title="级联数据" data={pickerData} />
                </FormItem>
            </Form>
        </Page>
    );
}

export default React.memo(PickerDemo);
