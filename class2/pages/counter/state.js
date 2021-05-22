import { useState } from 'react'

function CounterPage () {
  // 자바스크립트가 들어가는 공간

  // let count = 0
  const [count, setCount] = useState(0)

  function counter () {
    setCount(count + 1)
  }

  // HTML이 들어가는 공간
  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>카운터증가(state)</button>
    </>
  )
}

export default CounterPage
