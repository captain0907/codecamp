import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { getStorageUrl } from "../../src/commons/libraries/utils";
import { checkImage } from "../../src/commons/libraries/validations";
import LazyLoad from "react-lazy-load";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Image2Page = () => {
  const [fileUrl, setFileUrl] = useState<string>();
  const [uploadFile] =
    useMutation<IMutation, IMutationUploadFileArgs>(UPLOAD_FILE);
  const aaaRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (!checkImage(file)) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setFileUrl(String(event.target.result));
      //   console.log(event.target.result);
    };

    // try {
    //   const { data } = await uploadFile({ variables: { file } });
    //   setFileUrl(getStorageUrl(data.uploadFile.url));
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  const onClickUpload = () => {
    aaaRef.current?.click();
  };

  return (
    <>
      <button onClick={onClickUpload}>업로드!!</button>
      <input
        ref={aaaRef}
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
      <LazyLoad height={300} offsetVertical={300}>
        <img
          src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/327.png"
          height={300}
          width={300}
        />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img
          src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/003.png"
          height={300}
          width={300}
        />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img
          src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/029.png"
          height={300}
          width={300}
        />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img
          src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/008.png"
          height={300}
          width={300}
        />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img
          src="https://s.pstatic.net/static/newsstand/up/2020/0610/nsd151458769.png"
          height={300}
          width={300}
        />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img
          src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/092.png"
          height={300}
          width={300}
        />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img src={fileUrl} height={300} width={300} />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img src={fileUrl} height={300} width={300} />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img src={fileUrl} height={300} width={300} />
      </LazyLoad>
      <LazyLoad height={300} offsetVertical={300}>
        <img src={fileUrl} height={300} width={300} />
      </LazyLoad>
    </>
  );
};

export default Image2Page;
