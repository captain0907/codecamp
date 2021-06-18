import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { Body, Footer, Header, Wrapper } from "./LayoutFooter.styles";

const LayoutFooterUI = () => {
  const { userInfo } = useContext(GlobalContext);
  return <div>푸터영역: {userInfo?.email}</div>;
};

export default LayoutFooterUI;
