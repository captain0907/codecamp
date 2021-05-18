import { getDate } from '../../../commons/libraries/utils'
import {RowHeaderWrapper, RowWrapper, Checkbox, No, Title, Date} from './BoardList.styles'
import {useState} from 'react'

const BoardListUI = ({data}) => {

    const [checkedAll, setCheckedAll] = useState(false)

    const [checked, setChecked] = useState([
        // 각 버튼들의 체크상태 기록
    ])

    const handleCheck = (event) => {
        const number = Number(event.target.id)

        /////////////////////////////////////////////////
        // 1. 현재 내 자신의 체크상태 변경
        /////////////////////////////////////////////////
        let newChecked = []
        if(checked.includes(number)){
            newChecked = checked.filter((data) => data !== number)
            setChecked(newChecked)
        } else {
            newChecked = [ ...checked, number ]
            setChecked(newChecked)
        }

        /////////////////////////////////////////////////
        // 2. 전체선택버튼 체크상태 변경
        // ----------------------------------------------
        // if( 모두 체크되었는지 확인 ){
        //      전체선택버튼도 체크해줌 setCheckedAll(true) 
        // } else {
        //      전체선택버튼도 체크해줌 setCheckedAll(false) 
        // }
        /////////////////////////////////////////////////
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
                <Checkbox type="checkbox" onClick={handleCheckAll} checked={checkedAll} />
                <No>번호</No>
                <Title>제목</Title>
                <Date>작성일</Date>
            </RowHeaderWrapper>
            {data?.fetchBoards.map((board) => (
                <RowWrapper>
                    <Checkbox type="checkbox" id={board.number} onClick={handleCheck} checked={checked.includes(board.number)} />
                    <No>{board.number}</No>
                    <Title>{board.title}</Title>
                    <Date>{getDate(board.createdAt)}</Date>
                </RowWrapper>
            ))}
        </div>
    )
}

export default BoardListUI