import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // ES6
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Router } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      contents
    }
  }
`;

const EditorPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [contents, setContents] = useState("");
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "60cc366ad110d9002b0f5ed4" },
  });

  const onChangeEditor = (contents) => {
    // console.log(contents);
    setContents(contents);
  };

  useEffect(() => {}, []);

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer: "철수",
            password: "1234",
            title: "제목입니다",
            contents,
          },
        },
      });
      alert("등록이 성공적으로 완료되었습니다.");
      setIsSubmitting(false);
      //   Router.push('/상세보기주소')
    } catch (error) {
      alert(error.message);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <ReactQuill onChange={onChangeEditor} />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>

      <div
        dangerouslySetInnerHTML={{ __html: data?.fetchBoard.contents }}
      ></div>
      <div>{data?.fetchBoard.contents}</div>
    </>
  );
};

export default EditorPage;
