import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import {useRouter} from 'next/router'
import { useQuery, gql} from "@apollo/client";

const BoardEditPage = () => {

    const FETCH_BOARD = gql`
        query fetchBoard($boardId: ID!){
            fetchBoard(boardId: $boardId){
                writer
                title
                contents
            }
        }
    `

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, { variables: {boardId: router.query.id} })

    return <BoardWrite defaultValues={data?.fetchBoard}/>
}

export default BoardEditPage