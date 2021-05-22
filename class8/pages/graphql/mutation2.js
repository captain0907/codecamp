import { gql, useQuery, useMutation } from '@apollo/client'
import { useEffect } from 'react'

export default function AAA () {
  const CRATE_PROFILE = gql`
    mutation zzzzzzz($aaa: String, $bbb: Int, $ccc: String) {
      createProfile(name: $aaa, age: $bbb, school: $ccc) {
        message
      }
    }
  `

  const [createProfile] = useMutation(CRATE_PROFILE)

  async function click () {
    const result = await createProfile({
      variables: {
        aaa: '노원두123123',
        bbb: 13,
        ccc: '다람쥐초등'
      }
    })

    console.log(result)
  }

  return <button onClick={click}></button>
}
