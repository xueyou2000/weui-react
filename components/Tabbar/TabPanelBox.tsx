import React from "react";
import { SwipeableTabContent } from "xy-tabs";
import { TabContentRootProps } from "xy-tabs/es/interface";

export default function TabPanelBox(props: TabContentRootProps) {
    return (
        <div className="weui-tab__panel">
            <SwipeableTabContent {...props} />
        </div>
    );
}
