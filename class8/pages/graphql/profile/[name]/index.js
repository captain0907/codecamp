import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'

export default function ProfilePage () {
  const router = useRouter()

  const FETCH_PROFILE = gql`
    query fetchProfile($name: String) {
      fetchProfile(name: $name) {
        number
        name
        age
        school
      }
    }
  `

  // const {data} = useQuery(FETCH_PROFILE, {
  //     variables: { name: router.query.name }
  // })

  console.log('asdf')
  return (
    <div>
      <div></div>
    </div>
  )
}
