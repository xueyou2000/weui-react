import React from "react";
import Page from "site/components/Page";
import { Loadmore, BallLoading, CircleLoading, WaveLoading } from "weui-react";
import "./index.scss";

function LoadmoreDemo() {
    return (
        <Page className="loadmore-demo" title="Loadmore" introduce="加载更多">
            <Loadmore tips="正在加载" loading={true} />
            <br />
            <Loadmore tips="暂无数据" />
            <br />
            <Loadmore dot={true} />
            <br />
            <div className="align-center">
                <BallLoading />
            </div>
            <br />
            <div className="align-center">
                <CircleLoading />
            </div>
            <br />
            <div className="align-center">
                <WaveLoading />
            </div>
        </Page>
    );
}

export default React.memo(LoadmoreDemo);
