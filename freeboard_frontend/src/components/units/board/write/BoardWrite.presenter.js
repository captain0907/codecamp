export default function BoardWriteUI() {
    return (
        <Wrapper>
            <Title>게시판 등록</Title>
            <WriterWrapper>
            <InputWrapper>
                <Label>작성자</Label>
                <Writer 
                type="text" 
                placeholder="이름을 적어주세요." 
                onChange={handleChangeWriter} 
                />
            </InputWrapper>
            </WriterWrapper>
        </Wrapper>
    )
}
  