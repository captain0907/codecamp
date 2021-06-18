import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { LayoutContext } from "../index";

const LayoutHeaderUI = () => {
  const { test } = useContext(LayoutContext);
  const { userInfo } = useContext(GlobalContext);

  console.log(userInfo);

  return (
    <div>
      <div>이메일: {userInfo?.email}</div>
      <div>이름: {userInfo?.name}</div>
      <div>포인트: {userInfo?.userPoint?.amount}</div>
    </div>
  );
};

export default LayoutHeaderUI;
