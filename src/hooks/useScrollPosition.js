import { useEffect, useState } from "react"
import { throttle } from "underscore"

export const useScrollPosition = () => {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrolly] = useState(0)

  // 监听屏幕滚动
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX)
      setScrolly(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}