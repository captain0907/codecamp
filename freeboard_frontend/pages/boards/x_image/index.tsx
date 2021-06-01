import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Demo = () => {
  const router = useRouter();
  const [tag, setTag] = useState<any>();
  useEffect(() => {
    const image = new Image();
    image.src =
      "https://storage.cloud.google.com/codecamp-file-storage/2021/5/30/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-05-04%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.18.08.png";
    image.onload = () => {
      setTag(image);
    };
  }, []);

  return (
    <>
      <div>{}</div>
      <div onClick={() => router.push("/boards/y_image")}>이동하기</div>
    </>
  );
};

export default Demo;
