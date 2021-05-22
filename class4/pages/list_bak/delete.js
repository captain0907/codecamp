import { gql, useMutation, useQuery } from '@apollo/client'

export default function AAA () {
  const classmates = ['철수', '영희', '훈이']
  const aaa = classmates.map((data) => <div>{data}</div>)

  const FETCH_BOARDS = gql`
    query fetchBoards {
      fetchBoards {
        writer
        title
        contents
        number
      }
    }
  `

  const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int!) {
      deleteBoard(number: $number) {
        message
      }
    }
  `

  const { data } = useQuery(FETCH_BOARDS)
  const [deleteBoard] = useMutation(DELETE_BOARD)

  return (
    <div>
      {data?.fetchBoards.map((data, index) => (
        <div key={data.number}>
          <input
            type="checkbox"
            onClick={() =>
              deleteBoard({
                variables: { number: data.number },
                refetchQueries: [{ query: FETCH_BOARDS }]
              })
            }
          />
          <div>{data.writer}</div>
          <div>{data.title}</div>
          <div>{data.contents}</div>
        </div>
      ))}
    </div>
  )
}
