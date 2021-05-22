import {getDate} from '../../../commons/libraries/utils';
import {
  RowHeaderWrapper,
  RowWrapper,
  Checkbox,
  No,
  Title,
  Date,
} from './BoardList.styles';
import {useState} from 'react';

const BoardListUI = ({data}) => {
  console.log(data?.fetchBoards);

  return (
    <div>
      <RowHeaderWrapper>
        <Checkbox type="checkbox" />
        <No>번호</No>
        <Title>제목</Title>
        <Date>작성일</Date>
      </RowHeaderWrapper>
      {data?.fetchBoards.map((board) => (
        <RowWrapper>
          <Checkbox type="checkbox" />
          <No>{board.number}</No>
          <Title>{board.title}</Title>
          <Date>{getDate(board.createdAt)}</Date>
        </RowWrapper>
      ))}
    </div>
  );
};

export default BoardListUI;
