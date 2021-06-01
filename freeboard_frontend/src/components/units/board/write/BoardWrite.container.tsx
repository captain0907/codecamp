import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  ChangeEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import AvatarEditor from "react-avatar-editor";
import { useMutation } from "@apollo/client";

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  zipcode: "",
  youtube: "",
};

export default function BoardWrite({ defaultValues }) {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [isActive, setIsActive] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);
  const [myFile, setMyFile] = useState("");
  const [myUrl, setMyUrl] = useState("");

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    const isFullInputs =
      newInputs.writer &&
      newInputs.password &&
      newInputs.title &&
      newInputs.contents;
    isFullInputs ? setIsActive(true) : setIsActive(false);
  };

  const onClickRegister = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: inputs.writer,
            password: inputs.password,
            title: inputs.title,
            contents: inputs.contents,
          },
        },
      });
      const id = result.data.createBoard._id;
      alert("게시물이 성공적으로 등록되었습니다.");
      router.push(`/board/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickFile = () => {
    fileRef.current.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file.size >= 5 * 1024 * 1024) {
      alert("용량이 너무 큽니다.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      console.log(typeof event.target.result);
      setMyFile(String(event.target.result));
    };

    // const { data } = await uploadFile({ variables: { file } });
    // console.log(data);
    // setMyUrl(`https://storage.cloud.google.com/${data.uploadFile.url}`);

    const start = new Date().getTime();
    // await uploadFile({ variables: { file } });
    // await uploadFile({ variables: { file } });
    // await uploadFile({ variables: { file } });
    // await uploadFile({ variables: { file } });
    // await uploadFile({ variables: { file } });
    // await uploadFile({ variables: { file } }),
    await Promise.all([
      uploadFile({ variables: { file } }),
      uploadFile({ variables: { file } }),
      uploadFile({ variables: { file } }),
      uploadFile({ variables: { file } }),
      uploadFile({ variables: { file } }),
    ]);
    const end = new Date().getTime();
    console.log(end - start);
  };

  return (
    <>
      <img src={myFile} />
      <img src={myUrl} />
      <AvatarEditor
        image={myFile}
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
      <BoardWriteUI
        isActive={isActive}
        onChangeInput={onChangeInput}
        onClickRegister={onClickRegister}
        defaultValues={defaultValues}
        onClickFile={onClickFile}
        onChangeFile={onChangeFile}
        fileRef={fileRef}
      />
    </>
  );
}
