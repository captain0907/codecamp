export default function BoardWriteUI(props) {
    return (
        <Wrapper>
            <Title>게시판 등록</Title>
            <WriterWrapper>
            <InputWrapper>
                <Label>작성자</Label>
                <Writer 
                type="text" 
                placeholder="이름을 적어주세요." 
                onChange={props.handleChangeWriter} 
                />
            </InputWrapper>
            </WriterWrapper>
        </Wrapper>
    )
}
  