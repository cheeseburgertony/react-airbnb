import { Navigate } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import('@/pages/home'))
const Entire = lazy(() => import('@/pages/entire'))
const Detail = lazy(() => import('@/pages/detail'))

const routes = [
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/home', element: <Home /> },
  { path: '/entire', element: <Entire /> },
  { path: '/detail', element: <Detail /> }
]

export default routes