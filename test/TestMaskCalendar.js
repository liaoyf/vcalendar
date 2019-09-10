import React from 'react'
import MaskCalendar from '../src/components/MaskCalendar'

export default props => {
  //只显示特殊几个日期
  let customValidOptions = {
    '2018-03-27': {
      isValid: true
    },
    '2018-03-29': {
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
    <MaskCalendar
      showWeekHead={false}
      handleConfirm={() => {
        alert('确认')
      }}
      handleCancel={() => {
        alert('取消')
      }}
      displayMonthNum={4}
      customValidDate={true}
      dateOptions={customValidOptions}
      onItemClick={dayObj => {
        alert(dayObj.date)
      }}
    />
  )
}
