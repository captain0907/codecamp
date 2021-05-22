function CounterPage () {
  // 자바스크립트가 들어가는 공간

  let count = 0

  function counter () {
    count = count + 1
    console.log(count)
  }

  // HTML이 들어가는 공간
  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>카운터증가</button>
    </>
  )
}

export default CounterPage
