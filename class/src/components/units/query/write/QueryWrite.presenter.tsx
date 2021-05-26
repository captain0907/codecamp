import Modal from '../../../commons/modal/Modal.container'
import {RegisterButton} from './QueryWrite.styles'

const QueryWriteUI = ({
    handleChangeCcc,
    inputRef,
    onClickSubmit, 
    onChangeInput, 
    handleClose, 
    open, 
    aaa 
}) => {
    return (
        <div>
            {open && <Modal handleClose={handleClose} />}
            <span>이름: </span><input ref={inputRef} type="text" name="name" onChange={onChangeInput} ></input><br />
            <span>나이: </span><input type="text" name="age" onChange={onChangeInput}></input><br />
            <span>학교: </span><input type="text" name="school" onChange={onChangeInput}></input><br />
            <RegisterButton onClick={onClickSubmit}>프로필 등록하기</RegisterButton>
            <button onClick={handleChangeCcc}>CCC변경하기</button>
            {/* <RegisterButton onClick={onClickSubmit} aaa={aaa}>프로필 등록하기</RegisterButton> */}
        </div>
    )
}

export default QueryWriteUI