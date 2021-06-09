import { getDate } from "../../../commons/libraries/utils";
import {
  RowHeaderWrapper,
  RowWrapper,
  Checkbox,
  No,
  Title,
  Date,
  Page,
} from "./BoardList.styles";
import { useState } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import InfiniteScroll from "react-infinite-scroller";

const BoardListUI = ({
  data,
  onClickPage,
  currentPage,
  onLoadMore,
  hasMore,
}) => {
  const [checkedAll, setCheckedAll] = useState(false);

  const [checked, setChecked] = useState({
    // 각 버튼들의 체크상태 기록
    // 318: true
    // 320: true
    // ... 10개 모두 true
  });

  const [count, setCount] = useState(1);

  const handleCheck = (event) => {
    /////////////////////////////////////////////////
    // 1. 현재 내 자신의 체크상태 변경
    /////////////////////////////////////////////////

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // const newChecked = {
    //   ...checked,
    //   [event.target.id]: event.target.checked
    // };
    // setChecked(newChecked);

    // checked.

    // setChecked(prev => )

    /////////////////////////////////////////////////
    // 2. 전체선택버튼 체크상태 변경
    // ----------------------------------------------
    // if( 모두 체크되었는지 확인 ){
    //      전체선택버튼도 체크해줌 setCheckedAll(true)
    // } else {
    //      전체선택버튼도 체크해줌 setCheckedAll(false)
    // }
    /////////////////////////////////////////////////
    const values = [];
    for (let i = 0; i < data?.fetchBoards.length; i++) {
      values.push(newChecked[data?.fetchBoards[i].number]); // [true, false, true, false, false, true, false, ...]
    }
    const filteredValues = values.filter((data) => data === true); // [true, true, true, true ...]
    if (data?.fetchBoards.length === filteredValues.length) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  };

  const handleCheckAll = (event) => {
    const newCheckAll = event.target.checked;

    // 전체선택
    if (newCheckAll) {
      let newCheck = {};
      for (let i = 0; i < data?.fetchBoards.length; i++) {
        newCheck[data?.fetchBoards[i].number] = true;
      }
      console.log(newCheck); // { 318: true, 320: true }

      // {
      //     ...profile,
      //     [event.target.name]: event.target.value
      // }

      setChecked(newCheck);
      setCheckedAll(true);

      // 전체선택 취소
    } else {
      let newCheck = {};
      for (let i = 0; i < data?.fetchBoards.length; i++) {
        newCheck[data?.fetchBoards[i].number] = false;
      }
      setChecked(newCheck);
      setCheckedAll(false);
    }
  };

  // const profile = [10, 20]
  // profile[0] // 10
  // profile[1] // 20

  // const aaa = profile[0] // 10
  // const bbb = profile[1] // 20

  // //////////////////////////
  // const profile2 = [10, 20]
  // const aaa2 = profile2[0] // 10
  // const bbb2 = profile2[1] // 20

  // // 배열 비구조화할당 /////////////////////////
  // const [, aaa4] = [10, 20] // aaa4 = 20
  // const [aaa3] = [10, 20] // aaa3 = 10

  // // 객체 비구조화할당 ////////////////////
  // const profile5 = {
  //     name: "철수",
  //     age: 13,
  //     school: "다람쥐초등학교"
  // }
  // const name2 = profile5.name
  // const age2 = profile5.age
  // const school2 = profile5.school

  // //
  // const { name, age, school} = {
  //     name: "철수",
  //     age: 13,
  //     school: "다람쥐초등학교"
  // }

  // useMutation() => // [] 형태
  // const result = useMutation(임의의뮤테이션)
  // // const [deleteBoard] = [뮤테이션실행하는함수,]
  // result[0]({
  //     variables: {
  //         number: 360
  //     }
  // })

  // deleteBoard({
  //     variables: {
  //         number: 360
  //     }
  // })

  // useQuery() => // {} 형태
  // const result2 = useQuery(임의의쿼리)
  // result2.data

  // const {data, loading} = useQuery(임의의쿼리)

  //                 // {
  //                 //    data: laskfasdk,
  //                 //    loading: askl
  //                 // }

  const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int!) {
      deleteBoard(number: $number) {
        message
      }
    }
  `;
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (event) => {
    const result = await deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    alert(result.data.deleteBoard.message);
  };

  return (
    <div>
      <RowHeaderWrapper>
        <Checkbox
          type="checkbox"
          onClick={handleCheckAll}
          checked={checkedAll}
        />
        <No>번호</No>
        <Title>제목</Title>
        <Date>작성일</Date>
      </RowHeaderWrapper>
      <InfiniteScroll loadMore={onLoadMore} hasMore={true} height={1000}>
        {data?.fetchBoards.map((board, index) => (
          <RowWrapper key={index}>
            <Checkbox
              type="checkbox"
              onClick={handleCheck}
              checked={checked[board.number]}
            />
            <No>{board.number}</No>
            <Title>{board.title}</Title>
            <Date>{getDate(board.createdAt)}</Date>
            <div>현재 인덱스: {index}</div>
            <button id={board.number} onClick={onClickDelete}>
              삭제
            </button>
          </RowWrapper>
        ))}
      </InfiniteScroll>

      {/* {data?.fetchBoards.map((board, index) => (
        <RowWrapper key={index}>
          <Checkbox
            type="checkbox"
            onClick={handleCheck}
            checked={checked[board.number]}
          />
          <No>{board.number}</No>
          <Title>{board.title}</Title>
          <Date>{getDate(board.createdAt)}</Date>
          <div>현재 인덱스: {index}</div>
          <button id={board.number} onClick={onClickDelete}>
            삭제
          </button>
        </RowWrapper>
      ))} */}
      {new Array(10).fill(1).map((_, index) => (
        <Page
          id={String(index + 1)}
          onClick={onClickPage}
          isActive={currentPage === index + 1}
        >
          {index + 1}
        </Page>
      ))}
    </div>
  );
};

export default BoardListUI;
