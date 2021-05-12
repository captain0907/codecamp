import {
	Wrapper,
	Title,
	WriterWrapper,
	Label,
	Writer,
	Password,
	InputWrapper,
	Subject,
	Contents,
	ZipcodeWrapper,
	Zipcode,
	SearchButton,
	Address,
	Youtube,
	ImageWrapper,
	UploadButton,
	OptionWrapper,
	RadioButton,
	RadioLabel,
	CancelButton,
	SubmitButton,
	ButtonWrapper,
} from "../../styles/Board.write";
import { useState } from "react";

export default function BoardWritePage() {
	const [writer, setWriter] = useState("");
	const [pw, setPw] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [youtube, setYoutube] = useState("");
	const [zipcode, setZipcode] = useState("");

	const handleWriter = (e) => {
		setWriter(e.target.value);
		console.log(writer);
	};

	const handlePw = (e) => {
		setPw(e.target.value);
		console.log(pw);
	};

	const handleTitle = (e) => {
		setTitle(e.target.value);
		console.log(title);
	};

	const handleContent = (e) => {
		setContent(e.target.value);
		console.log(content);
	};

	const handleYoutube = (e) => {
		setYoutube(e.target.value);
		console.log(youtube);
	};

	const handleZipCode = (e) => {
		setZipcode(e.target.value);
		console.log(zipcode);
	};

	const handleRegister = () => {
		console.log(writer, pw, title, content, youtube, zipcode);
	};

	return (
		<Wrapper>
			<Title>게시판 등록</Title>
			<WriterWrapper>
				<InputWrapper>
					<Label>작성자</Label>
					<Writer
						type="text"
						placeholder="이름을 적어주세요."
						onChange={handleWriter}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label>비밀번호</Label>
					<Password
						type="password"
						placeholder="비밀번호를 입력해주세요."
						onChange={handlePw}
					/>
				</InputWrapper>
			</WriterWrapper>
			<InputWrapper>
				<Label>제목</Label>
				<Subject
					type="text"
					placeholder="제목을 작성해주세요."
					onChange={handleTitle}
				/>
			</InputWrapper>
			<InputWrapper>
				<Label>내용</Label>
				<Contents placeholder="내용을 작성해주세요." onChange={handleContent} />
			</InputWrapper>
			<InputWrapper>
				<Label>주소</Label>
				<ZipcodeWrapper>
					<Zipcode placeholder="07250" onChange={handleZipCode} />
					<SearchButton>우편번호 검색</SearchButton>
				</ZipcodeWrapper>
				<Address />
				<Address />
			</InputWrapper>
			<InputWrapper>
				<Label>유튜브</Label>
				<Youtube placeholder="링크를 복사해주세요." onChange={handleYoutube} />
			</InputWrapper>
			<ImageWrapper>
				<Label>사진첨부</Label>
				<UploadButton>
					<div>+</div>
					<div>Upload</div>
				</UploadButton>
				<UploadButton>
					<div>+</div>
					<div>Upload</div>
				</UploadButton>
				<UploadButton>
					<div>+</div>
					<div>Upload</div>
				</UploadButton>
			</ImageWrapper>
			<OptionWrapper>
				<Label>메인설정</Label>
				<RadioButton type="radio" id="youtube" name="radio-button" />
				<RadioLabel htmlFor="youtube">유튜브</RadioLabel>
				<RadioButton type="radio" id="image" name="radio-button" />
				<RadioLabel htmlFor="image">사진</RadioLabel>
			</OptionWrapper>
			<ButtonWrapper>
				<CancelButton>취소하기</CancelButton>
				<SubmitButton onClick={handleRegister}>등록하기</SubmitButton>
			</ButtonWrapper>
		</Wrapper>
	);
}
