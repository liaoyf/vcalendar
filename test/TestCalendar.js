import React from 'react'
import Calendar from '../src/components/Calendar'

//全屏日历，需要加外层样式
export default props => {
  //全部的日历
  let dateOptions = {
    '2018-04-11': {
      className: 'cld_daystart',
      subText: '去程',
      subClass: 'cld_text'
    },
    '2018-04-12': { className: 'cld_daymiddle' },
    '2018-04-13': {
      className: 'cld_daymiddle',
      subText: '测试111',
      subClass: 'cld_text'
    },
    '2018-04-14': {
      className: 'cld_dayend',
      subText: '返程',
      subClass: 'cld_text'
    },
    '2018-04-18': {
      subText: '40%用户这天返程',
      subClass: 'cld_recommend'
    },
    '2018-04-20': {
      subStr: [
        <span key={0} className="cld_price">
          <dfn>¥</dfn>500
        </span>
      ]
    }
  }
  //只显示特殊几个日期
  let customValidOptions = {
    '2018-04-11': {
      isValid: true
    },
    '2018-04-18': {
      isValid: true,
      subStr: [
        <span key={0} className="cld_price">
          <dfn>¥</dfn>500
        </span>
      ]
    },
    '2018-04-20': {
      isValid: true
    },
    '2018-04-25': {
      isValid: true
    }
  }

  return (
    <div style={{ display: 'flex',flexDirection: 'column',height:window.innerHeight }}>
      <Calendar
        displayMonthNum={3}
        dateOptions={dateOptions}
        onItemClick={dayObj => {
          alert(dayObj.date)
        }}
      />
    </div>
  )
}
