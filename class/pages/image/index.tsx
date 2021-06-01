import { useMutation, gql } from "@apollo/client";
import { useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const ImagePage = () => {
  const [myImage, setMyImage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState();

  const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
      uploadFile(file: $file) {
        url
      }
    }
  `;

  const [uploadFileMutation] =
    useMutation<IMutation, IMutationUploadFileArgs>(UPLOAD_FILE);

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      alert("파일이 너무 큽니다(5MB 제한!)");
      return;
    }

    if (!file.type.includes("png")) {
      alert("png 파일만 업로드 가능합니다!");
      return;
    }

    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = (event) => {
    //   setMyImage(String(event.target.result));
    // };

    // console.log(file);
    // setFile(file);
    const start = new Date().getTime();
    await uploadFileMutation({
      variables: { file: file },
    });
    await uploadFileMutation({
      variables: { file: file },
    });
    await uploadFileMutation({
      variables: { file: file },
    });
    await uploadFileMutation({
      variables: { file: file },
    });
    await uploadFileMutation({
      variables: { file: file },
    });
    // const result =

    const end = new Date().getTime();
    console.log(end - start);
  };

  const onClickImage = () => {
    fileRef.current.click();
  };

  async function onClickSubmit() {}

  return (
    <div>
      <button onClick={onClickImage}>이미지를 업로드하는 버튼</button>
      <input
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
      <img src={myImage} />
      <button onClick={onClickSubmit}>서버에 파일 전송하기</button>
    </div>
  );
};

export default ImagePage;
