import React from 'react'
export default _ => {
  var html = {
    __html: `<style type="text/css">body,div,h1,h2,h3,h4,h5,h6,li,ol,p,section,ul{margin:0;padding:0}section{display:block}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}dfn,em,i,var{font-style:normal;font-weight:400}dfn{font-family:Arial;margin:0 1px}ol,ul{list-style:none}body{min-width:320px;overflow-x:hidden;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-user-select:none;background:#f7f7f7;color:#222;-webkit-overflow-scrolling:touch}body,html{height:100%}.-fl-JkhMkg-{float:left}.-fr-GPSdKs-{float:right}.-body-18XZsz-,body,h1,h2,h3,h4,h5,h6{font:normal 14px/1.5 PingFangSC-Light,Arial,Lucida Grande,Verdana,Microsoft YaHei,hei}.-cldweek-qPydSx-:after,.-new_pop_top-3OZs7o-:after{content:"";position:absolute;left:0;bottom:0;height:1px;width:100%;background:#ececec;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 bottom;transform-origin:0 bottom}.-dp_calendar-1sZrk1-,.-flex_column-16guQn-{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;height:100%}.-dp_calendar-1sZrk1-{background:#fff;font-family:PingFangSC-Regular,Microsoft YaHei}.-dp_calendar-1sZrk1- .-flex_column-16guQn-{position:relative}.-dp_calendar-1sZrk1- .-flex_column-16guQn- .-cldunit-3qaTfC-{height:100%}.-cldweek-qPydSx-{position:relative;z-index:2;overflow:hidden}.-cldweek-qPydSx-:after{background:#f7f7f7}.-cldweek-qPydSx- li:nth-child(6n+1){color:#ff3535}.-dp_top_tips-3_SG9o-{padding:5px 15px;background:#fff5d1;line-height:20px;font-size:12px;color:#666}.-cldweek-qPydSx- li:first-child,.-cldweek-qPydSx- li:last-child{width:15%}.-cldweek-qPydSx- li{float:left;width:14%;line-height:25px;text-align:center;color:#333;background:#fff;font-size:12px}.-dp_calendar-1sZrk1- .-cldmonth-K7VVY_-{font-size:14px;text-align:center;height:30px;line-height:30px;font-family:PingFangSC-Regular;background:#f7f7f7}.-dp_calendar-1sZrk1- .-cldmonth_fixed-3LZYKj-{position:absolute;left:0;right:0;z-index:1;-webkit-transform:translateZ(0)}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR-{overflow:hidden;position:relative}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li{float:left;width:14%;text-align:center;height:58px;box-sizing:border-box;padding:20px 0 0;border-radius:2px;position:relative}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li:nth-child(7n),.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li:nth-child(7n+1){width:15%}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li:nth-child(7n) em,.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li:nth-child(7n+1) em{color:#ff3535}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- em{display:block;line-height:18px;font-size:17px;font-family:PingFangSC-Regular,Microsoft YaHei}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- ins{font-size:10px;position:absolute;top:6px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-decoration:none;line-height:1;white-space:nowrap}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- span{display:block;font-size:10px;line-height:13px;margin-top:2px}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li.-cld_daypass-zlir0e- *,.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li.-cld_daypass-zlir0e- em{color:#ccc}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_price-2fuoBD-{font-size:11px;color:#333;line-height:14px;margin-top:2px}.-cld_daybox-19zWoR- .-cld_holiday-2dOrZn- em,.-cld_daybox-19zWoR- .-cld_holiday-2dOrZn- ins,.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_min-mUXK53-{color:#ff3513}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_daymiddle-1H1APf-,.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_selected-1L40rq-{background:#ecf6fc}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_dayend-gjuYMJ-,.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_daystart-1PeVxL-{background:#19a0f0}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_dayend-gjuYMJ- *,.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_daystart-1PeVxL- *{color:#fff!important;opacity:.7}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_dayend-gjuYMJ- em,.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_daystart-1PeVxL- em{opacity:1}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- li.-cld_working-f5V9uL- em{color:#222}.-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- .-cld_text-3oy-W2-{font-size:10px;line-height:13px;margin-top:2px}.-calendar_tips-3UXMW6-{position:fixed;left:0;bottom:0;width:100%;line-height:30px;height:30px;background:rgba(9,159,222,.7);text-align:center;color:#fff}@-webkit-keyframes -slideInDown-20-pCw-{0%{-webkit-transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0)}}@keyframes -slideInDown-20-pCw-{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.-slideInDown-20-pCw-{-webkit-animation:-slideInDown-20-pCw- .5s forwards;animation:-slideInDown-20-pCw- .5s forwards}@-webkit-keyframes -slideInUp-eph7yb-{0%{-webkit-transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0)}}@keyframes -slideInUp-eph7yb-{0%{-webkit-transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0)}}.-slideInUp-eph7yb-{-webkit-animation:-slideInUp-eph7yb- .5s forwards;animation:-slideInUp-eph7yb- .5s forwards}@-webkit-keyframes -slideOutUp-2628l2-{0%{-webkit-transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0)}}@keyframes -slideOutUp-2628l2-{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.-slideOutUp-2628l2-{-webkit-animation:-slideOutUp-2628l2- .5s forwards;animation:-slideOutUp-2628l2- .5s forwards}@-webkit-keyframes -slideOutDown-rVVc9C-{0%{-webkit-transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0)}}@keyframes -slideOutDown-rVVc9C-{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}.-slideOutDown-rVVc9C-{-webkit-animation:-slideOutDown-rVVc9C- .5s forwards;animation:-slideOutDown-rVVc9C- .5s forwards}.-new_bg-ktxMi7-{background:rgba(0,0,0,.88);position:fixed;left:0;top:0;height:100%;width:100%;z-index:970}.-new_pop_calendar-3fOFfY-{top:250px;position:fixed;z-index:999;left:0;width:100%;bottom:0;background:#fff}.-new_calendar_con-2CJjv--{height:100%;position:relative;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.-new_pop_calendar-3fOFfY- .-dp_calendar-1sZrk1-{padding-top:0}.-new_calendar_con-2CJjv-- .-dp_calendar-1sZrk1- .-cld_daybox-19zWoR- em{font-size:14px}.-new_pop_tit-1FvPaV-{position:absolute;left:0;top:0;width:100%;background:#fff;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.-new_pop_top-3OZs7o-{overflow:hidden;position:relative}.-new_pop_tit-1FvPaV- .-pop_tit_btn-kNSFE4-:first-child{color:#333}.-new_pop_tit-1FvPaV- .-pop_tit_btn-kNSFE4-{width:60px;height:40px;line-height:40px;text-align:center}.-new_pop_tit-1FvPaV- h3{text-align:center;font-size:16px;overflow:hidden;height:40px;line-height:40px;margin:0 60px}.-new_bottom_close-33SP5_-{height:45px;line-height:45px;text-align:center;color:#19a0f0;position:absolute;bottom:0;left:0;width:100%;background:#fff;font-size:16px}</style>`
  };
  return <div dangerouslySetInnerHTML={html}/>
}