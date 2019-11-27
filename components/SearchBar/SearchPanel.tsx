import classNames from "classnames";
import React from "react";
import { useControll } from "utils-hooks";
import { List, ListItem } from "../List";
import SearchBar, { SearchBarProps } from "./SearchBar";
import "./style";

export interface SearchPanelProps<T = any> extends SearchBarProps {
    /**
     * 数据
     */
    data?: T[];
    /**
     * 渲染内容
     */
    children: (d: React.ReactNode, i: number) => React.ReactNode;
    /**
     * 是否显示
     */
    visible?: boolean;
    /**
     * 默认是否显示
     */
    defaultVisible?: boolean;
    /**
     * 显示改变
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 选择事件
     */
    onPicker?: (d: T) => void;
    /**
     * 如何转换 T 类型到input的值
     */
    conver?: (d: T) => string;
}

function SearchPanel(props: SearchPanelProps) {
    const { data = [], children, visible, defaultVisible, onVisibleChange, onPicker, conver, ...rest } = props;
    const [_visible, setVisible, isVisibleControll] = useControll(props, "visible", "defaultVisible");
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");

    function changeValue(val: string) {
        if (!isControll) {
            setValue(val);
        }

        if (props.onChange) {
            props.onChange(val);
        }
    }

    function handleVisibleChange(_open: boolean) {
        if (!isVisibleControll) {
            setVisible(_open);
        }
        if (onVisibleChange) {
            onVisibleChange(_open);
        }
    }

    function pickerHandle(d: any) {
        changeValue(conver ? conver(d) : d + "");
        if (onPicker) {
            onPicker(d);
        }
        handleVisibleChange(false);
    }

    return (
        <div className={classNames("container search-panel", { show: _visible })}>
            <SearchBar {...rest} value={value} autoFocus={_visible} onChange={changeValue} onCancel={() => handleVisibleChange(false)} onConfirm={pickerHandle} />
            <List className="searchbar-result">
                {data.map((d, i) => (
                    <ListItem key={i} onClick={() => pickerHandle(d)}>
                        {children(d, i)}
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default React.memo(SearchPanel);
