import { ChangeEvent, MouseEvent } from 'react';
import {RegisterButton} from './QueryWrite.styles';


interface IProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
  aaa: boolean
}
const QueryWriteUI = ({onClickSubmit, onChangeInput, aaa}: IProps) => {
  return (
    <div>
      <span>이름: </span>
      <input type="text" name="name" onChange={onChangeInput}></input>
      <br />
      <span>나이: </span>
      <input type="text" name="age" onChange={onChangeInput}></input>
      <br />
      <span>학교: </span>
      <input type="text" name="school" onChange={onChangeInput}></input>
      <br />
      <RegisterButton onClick={onClickSubmit}>프로필 등록하기</RegisterButton>
      <RegisterButton onClick={onClickSubmit} aaa={aaa}>
        프로필 등록하기
      </RegisterButton>
    </div>
  );
};

export default QueryWriteUI;
