import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../../components";

describe("Button", () => {
    test("render", () => {
        const wrapper = render(<Button>按钮</Button>);
        const button = wrapper.getByText("按钮");
        expect(button).toBeDefined();
    });

    test("Button Type", () => {
        const wrapper = render(<Button type="primary">按钮</Button>);
        const button = wrapper.getByText("按钮");
        expect(button.classList.contains("weui-btn_primary")).toBeTruthy();
    });
});
