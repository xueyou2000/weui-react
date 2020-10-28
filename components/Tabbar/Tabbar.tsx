import classNames from "classnames";
import React from "react";
import { Tabs } from "xy-tabs";
import "xy-tabs/assets/index.css";
import { TabsProps } from "xy-tabs/es/interface";
import "./style/index.scss";
import TabPanelBox from "./TabPanelBox";

function Tabbar(props: TabsProps) {
    return <Tabs {...props} className={classNames(props.className, "weui-tab")} lazy={true} reverse={true} renderTabContent={() => <TabPanelBox />} />;
}

export default Tabbar;
