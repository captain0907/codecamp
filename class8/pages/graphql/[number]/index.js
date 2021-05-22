import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function DynamicPage () {
  const router = useRouter()

  function kkk () {
    console.log(router.pathname)
    console.log(router.asPath)
  }

  return (
    <button onClick={kkk}>{router.query.number}번 상세글 페이지 입니다.</button>
  )
}
