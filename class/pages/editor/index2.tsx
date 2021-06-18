import { gql, useMutation, useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      contents
    }
  }
`;

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const EditorPage2 = () => {
  const [editor, setEditor] = useState();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onChangeEditor = (contents) => {
    setEditor(contents);
  };

  const onClickSubmit = async (event) => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "에디터연습",
          contents: editor,
        },
      },
    });
  };

  if (typeof window === undefined) return <div />;
  return (
    <>
      <ReactQuill theme="snow" onChange={onChangeEditor} />
      <button onClick={onClickSubmit}>전송</button>

      <div
        dangerouslySetInnerHTML={{
          __html: `${data?.fetchBoards?.[0]?.contents}`,
        }}
      />
    </>
  );
};

export default EditorPage2;
