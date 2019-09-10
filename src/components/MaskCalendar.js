import Calendar, { WeekHeader } from './Calendar'
import React from 'react'
import styles from '../css/calendar.css'
class MaskCalendar extends React.Component {
  componentDidMount() {
    //兼容ios8 动画导致蒙层不能滚动
    const slideInUpEl = this.slideInUpEl
    this.timer&&clearTimeout(this.timer)
    if (slideInUpEl && slideInUpEl.className) {
      this.timer = setTimeout(() => {
        slideInUpEl.className = slideInUpEl.className.replace(styles.slideInUp, '')
      }, 500)
    }
  }
  componentWillUnmount() {
    this.timer&&clearTimeout(this.timer)
  }
  render() {
    return (
      <div className={styles.new_mask}>
        <div className={styles.new_bg} />
        <div className={`${styles.new_pop_calendar} ${styles.slideInUp}`} ref={el=>this.slideInUpEl = el}>
          <div className={styles.new_pop_tit}>
            <div className={styles.new_pop_top}>
              <span
                className={`${styles.fl} ${styles.pop_tit_btn}`}
                onClick={props.handleCancel}
              >
                取消
              </span>
              <span
                className={`${styles.fr} ${styles.pop_tit_btn}`}
                onClick={props.handleConfirm}
              >
                确定
              </span>
              <h3>选择日期</h3>
            </div>
            <WeekHeader />
          </div>

          <div className={styles.new_calendar_con} style={{ paddingBottom: 0 }}>
            <Calendar showWeekHead={false} {...props} />
          </div>
        </div>
      </div>
    )
  }
}

export default MaskCalendar
