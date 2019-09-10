### 通用日历组件
- 配合imvc同构架构，采用style方式内联css
- 使用css-module，不会造成全局css污染
- 含全屏日历以及半屏日历


#### Installation
```
npm install vcalendar --save
```
#### Usage
```
import Calendar,{ MaskCalendar } from 'vcalendar';
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<Calendar />, container);
```

#### Example
[全屏日历](./test/TestCalendar.js)  （Tip:全屏日历的月份头部固定需要给外层容器一个高度）   
[半屏日历](./test/TestMaskCalendar.js)

#### API
```
/*
 * @param props
 * onItemClick:(dateObj)=>{},//点击日历回调 dateObj.date
 * showFestive: true or false,//展示节假日 默认true
 * showWeekHead: true or false,//日历上的星期 默认true
 * showMonthHead: true or false,//日历上的月份 默认true
 * startDate: "2017-10-09",//默认今天
 * endDate: "2018-10-09",//默认今天+365
 * displayMonthNum: 12,//展示几个月，默认12
 * customValidDate: false,//根据dateOptions的数据，定制化可点击日期,此时 endDate无效
 * showToday: true or false,//展示 今天、明天、后天 默认true
 * needFixedMonthHeader: true or false,//滚动时月份头固定，默认为true
 * anchorDate: "2018-02-20" //锚定日期, 为空则不锚定
 * dateOptions: {//扩展显示 用法见 example
 *  '2017-10-20':{
 *      isValid:true,//此属性 customValidDate 为true时生效
 *      className:'',//当前日期自定义class 内置样式支持 'cld_daymiddle,cld_daystart,cld_dayend'
 *      style:{}//支持不用class 直接写style
 *      subStr:'test', //[<span key={0} className="">123</span>],用数组传进来自定义的 subtitle
 *      //设置 subStr后 subText、subClass不生效
 *      subText:'test'//当前日期子标题 使用的是Span标签
 *      subClass:'',//子标题的class 内置样式支持'cld_text, cld_recommend'
 *      subStyle:{} //字标题style
 *  }
 * }
 */
```