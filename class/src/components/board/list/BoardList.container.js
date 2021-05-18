import {useQuery} from '@apollo/client'
import BoardListUI from './BoardList.presenter3'
import {FETCH_BOARDS} from './BoardList.queries'

const BoardList = () => {
    const {data} = useQuery(FETCH_BOARDS)

    return <BoardListUI data={data} />
}

export default BoardList