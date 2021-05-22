import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function QueryPage () {
  const router = useRouter()

  useEffect(() => {
    router.push('/graphql/profile/보노보노')
  }, [])

  return <div></div>
}
