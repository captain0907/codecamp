import { getDate } from '../../../commons/libraries/utils'
import {RowHeaderWrapper, RowWrapper, Checkbox, No, Title, Date} from './BoardList.styles'
import {useState} from 'react'

const BoardListUI = ({data}) => {

    const [checkedAll, setCheckedAll] = useState(false)

    const [checked, setChecked] = useState([
        // 각 버튼들의 체크상태 기록
        // 318, 320, ...
    ])

    const handleCheck = (event) => {
        const number = Number(event.target.id)

        let newChecked = []
        if(checked.includes(number)){
            newChecked = checked.filter((data) => data !== number)
            setChecked(newChecked)
        } else {
            newChecked = [ ...checked, number ]
            setChecked(newChecked)
        }

        if(data?.fetchBoards.length === newChecked.length){
            setCheckedAll(true)
        } else {
            setCheckedAll(false)
        }
    }

    const handleCheckAll = (event) => {
        const newCheckAll = event.target.checked

        // 전체선택
        if(newCheckAll){
            const newCheck = data?.fetchBoards?.map((data) => data.number) // [387, 361, ...]
            setChecked(newCheck)
            setCheckedAll(true)

        // 전체선택 취소
        } else {
            const newCheck = []
            setChecked(newCheck)
            setCheckedAll(false)
        }
    }

    return (
        <div>
            <RowHeaderWrapper>
                <Checkbox type="checkbox" onChange={handleCheckAll} checked={checkedAll} />
                <No>번호</No>
                <Title>제목</Title>
                <Date>작성일</Date>
            </RowHeaderWrapper>
            {data?.fetchBoards.map((board) => (
                <RowWrapper>
                    <Checkbox type="checkbox" id={board.number} onChange={handleCheck} checked={checked.includes(board.number)} />
                    <No>{board.number}</No>                                                 {/* [318, 371, ....] */}
                    <Title>{board.title}</Title>
                    <Date>{getDate(board.createdAt)}</Date>
                </RowWrapper>
            ))}
        </div>
    )
}

export default BoardListUI