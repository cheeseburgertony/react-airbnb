import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['aaa', 'bbb', 'ccc', 'abc', 'acb', 'bac', 'cba', 'ddd']
  const [selectIndex, setSelectIndex] = useState(0)
  const toggleClickHandle = (isNext = true) => {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex > names.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = names.length - 1
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => toggleClickHandle(false)}>上一个</button>
        <button onClick={e => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex} >
          {names.map(item => (
            <button key={item}>{item}</button>
          ))}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo