import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useScrollTop = () => {
  const location = useLocation()
  useEffect(() => {
    // 路径发生变化就滚动到最顶部
    window.scrollTo(0, 0)
  }, [location.pathname])
}
