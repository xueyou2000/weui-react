import React from "react";
import "./style/index.scss";

const Stripe = React.forwardRef((props: any, ref: React.MutableRefObject<any>) => {
    return <div ref={ref} className="stripe" />;
});

export default React.memo(Stripe);
