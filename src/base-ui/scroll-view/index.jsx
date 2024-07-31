import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(true)
  const [showLeft, setShowLeft] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()

  // 一开始组件渲染完毕时是否要渲染右侧按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    // 获取scroll-content的滚动宽度和占据宽度来决定右按钮是否显示
    const scrollWidth = scrollContentRef.current.scrollWidth  // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth  // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
    // props.children作为依赖项，保证在发生网络请求后获取到数据后还能正常调用
  }, [props.children])

  // 按钮事件处理逻辑
  const controlClickHandle = (isRight) => {
    // 拿到下一个tab元素，向左移动他的左侧距离tabs左侧的距离offsetLeft
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    // 判断左右两侧按钮是否还要出现
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div ref={scrollContentRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})


export default ScrollView