import request from '@/services/request'
import React, { memo, useEffect, useState } from 'react'

const Home = memo(() => {
  const [highScore, setHighScore] = useState({})

  useEffect(() => {
    request.get('/home/highscore').then(res => {
      console.log(res);
      setHighScore(res)
    })
  }, [])


  return (
    <div>
      <h1>{highScore.title}</h1>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore.list?.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
})

export default Home