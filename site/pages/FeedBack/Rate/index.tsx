import React from "react";
import Page from "site/components/Page";
import { Rate } from "weui-react";

function RateDemo() {
    return (
        <Page title="Rate" introduce="评级">
            <div style={{ textAlign: "center" }}>
                <Rate defaultValue={3} />
            </div>
        </Page>
    );
}

export default React.memo(RateDemo);
