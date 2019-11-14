import React from "react";
import loadable, { DefaultComponent } from "@loadable/component";
import "./index.scss";
import { WaveLoading } from "weui-react";

export function WaveLoadingPage() {
    return (
        <div className="page-center-wrap">
            <WaveLoading />
        </div>
    );
}

/**
 * 动态加载组件
 * @param loadFn
 */
export default function loadComponent(loadFn: (props: any) => Promise<DefaultComponent<any>>) {
    return loadable(loadFn, {
        fallback: <WaveLoadingPage />,
    });
}
