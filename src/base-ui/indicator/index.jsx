import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props

  // 根据获取到的选择项来控制content的item
  const contentRef = useRef()
  useEffect(() => {
    // 选择的item的信息
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth

    // 整个content的信息
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 计算得出要移动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 最左最右特殊处理
    const totalDistance = contentScroll - contentWidth
    if (distance < 0) distance = 0
    if (distance > totalDistance) distance = totalDistance

    // 进行位置修改
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator