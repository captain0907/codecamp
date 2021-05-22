import axios from 'axios'
import { useState } from 'react'

export default function AsyncAwaitPage () {
  // 따로 따로 입력하는 경우
  // const [title, setTitle] = useState("")
  // const [content, setContent] = useState("")
  const [date, setDate] = useState()

  // 한번에 객체로 담는 경우
  // const [data, setData] = useState({})

  async function handleClickGetPost () {
    console.log('게시물 가져와 주세요')
    const result = await axios.get('https://koreanjson.com/posts3')
    const year = new Date(result.data.createdAt).getFullYear()
    const month = String(new Date(result.data.createdAt).getMonth()).padStart(
      2,
      '0'
    )
    const date = new Date(result.data.createdAt).getDate()
    // setDate(result.data.createdAt)
    setDate(`${year}.${month}.${date}`)
  }

  return (
    <>
      <div>
        <span>제목:</span>
        <span></span>
      </div>
      <div>
        <div>내용:</div>
        <div></div>
      </div>
      <span>작성일:</span>
      <span>2021.09.01</span>
      <br />
      <span>작성일:</span>
      <span>{date}</span>
      <div>
        <button onClick={handleClickGetPost}>게시물 가져오기</button>
      </div>
    </>
  )
}
