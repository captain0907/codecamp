import { gql, useQuery, useMutation } from '@apollo/client'
import { useEffect } from 'react'

export default function AAA () {
  const CRATE_BOARD = gql`
    mutation zzzzzzz($aaa: String, $bbb: String, $ccc: String, $ddd: String) {
      createBoard(writer: $aaa, password: $bbb, title: $ccc, contents: $ddd) {
        message
      }
    }
  `

  const [createBoard] = useMutation(CRATE_BOARD)

  useEffect(() => {
    createBoard({
      variables: {
        aaa: '가가가',
        bbb: '1234',
        ccc: '타이틀',
        ddd: '컨텐츠'
      }
    })
  }, [])

  return <div></div>
}
