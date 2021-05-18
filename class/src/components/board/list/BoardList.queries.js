import {gql} from '@apollo/client'

export const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            number
            writer
            title
            contents
            createdAt
        }
    }
`