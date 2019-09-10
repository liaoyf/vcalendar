import React from 'react'

import TestCalendar from './TestCalendar'
import TestMaskCalendar from './TestMaskCalendar'

import ReactDOM from 'react-dom'

const parseSearch = (str = '') => {
  return str.split('&').reduce((memo, x) => {
    let qa = x.split('=')
    if (!qa[0]) return memo
    return Object.assign(memo, {
      [qa[0]]: qa[1] ? qa[1] : ''
    })
  }, {})
}

const container = document.getElementById('app')
const params = parseSearch(location.search && location.search.substr(1))
if (params.mode == 2) {
  ReactDOM.render(<TestMaskCalendar />, container)
} else {
  ReactDOM.render(<TestCalendar />, container)
}
