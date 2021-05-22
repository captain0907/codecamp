export default function AAA () {
  const classmates = ['철수', '영희', '훈이']
  const aaa = classmates.map((data) => <div>{data}</div>)

  return <div>{aaa}</div>
}

// [<div>철수</div>, <div>영희</div>, <div>훈이</div>]
