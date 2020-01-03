# Change Log

## 1.6.2 (Fri Jan 03 2020)

-   `Form`增加`fixed`参数, 改变默认页脚悬浮行为

## 1.6.1 (Thu Jan 02 2020)

-   `DatePicker`月份的值也要+1

## 1.6.0 (Thu Jan 02 2020)

-   修复`Picker`当`data`数据源变动时,`label`没有更新
-   修复`DatePicker`组件的月份是从`1-12`而不是`0-11`的问题
-   优化`Preview`样式, 避免没值得行坍塌

## 1.5.1 (Fri Dec 27 2019)

-   `Picker`当`value`从外部触发改变, 而不是内部选中改变时, 也要更新`label`文本

## 1.5.0 (Fri Dec 27 2019)

-   `Picker`增加`disabled`属性

## 1.4.2 (Fri Dec 27 2019)

-   `Stripe`转发`ref`

## 1.4.1 (Thu Dec 26 2019)

-   同步`xy-form`版本至`0.7.0`

## 1.4.0 (Wed Dec 25 2019)

-   修复`Picker`组件`Confirm`事件的值不是最新的问题

## 1.3.1 (Wed Dec 25 2019)

-   同步`xy-form`版本

## 1.3.0 (Tue Dec 24 2019)

-   修复`DatePicker`像`Picker`传递`props`漏掉的属性

## 1.2.0 (Tue Dec 24 2019)

-   紧急修复`getSaveValue`方法忘记判断`visibleValue`值为空情况, 导致空指针.

## 1.1.0 (Tue Dec 24 2019)

-   修复`Picker`和`DatePicker`设置`cols`无效问题

## 1.0.1 (Tue Dec 24 2019)

-   更新`xy-form`版本, 避免冲突. 不同版本的`FormContext`不一样

## 1.0.0 (Tue Dec 24 2019)

-   重构`Picker`和`DatePicker`, 破坏性重构, 影响使用
-   增加国际化

## 0.6.3 (Thu Dec 05 2019)

-   修复`HalfScreenDialog`左上角关闭按钮事件
-   修复`Keyboard`确认按钮高度样式

## 0.6.2 (Thu Dec 05 2019)

-   `PreviewItem`增加`className`属性

## 0.6.1 (Thu Dec 05 2019)

-   增加`Rate`评级组件

## 0.6.0 (Thu Dec 05 2019)

-   将`px`翻倍, 配合`postcss-px-to-viewport`使用.

## 0.5.3 (Fri Nov 29 2019)

-   `Toast`取消背景遮罩

## 0.5.2 (Fri Nov 29 2019)

-   导出`getPickerLabel`方法

## 0.5.1 (Thu Nov 28 2019)

-   修复 weui-popup-content 样式权重过高问题
-   修复`Dialog`组件样式高度问题

## 0.5.0 (Thu Nov 28 2019)

-   修复编译后`png`文件丢失问题

## 0.4.0 (Thu Nov 28 2019)

-   修复弹出组件样式被覆盖问题
-   修复`DatePicker`组件默认值

## 0.3.1 (Wed Nov 27 2019)

-   修复样式被压缩丢失问题

## 0.3.0 (Wed Nov 27 2019)

-   实现大部分组件

## 0.0.1 (Sat Apr 20 2019)

-   初始化项目
