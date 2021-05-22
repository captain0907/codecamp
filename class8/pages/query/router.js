import { useRouter } from 'next/router'

export default function RouterPage () {
  const router = useRouter()

  const onClickRouting = () => {
    // router.replace('/mutation')
    const value = 'bbb'

    router.push(`/query/훈이/111/${value}`)
  }

  return <button onClick={onClickRouting}>게시글 등록 페이지로 이동</button>
}
