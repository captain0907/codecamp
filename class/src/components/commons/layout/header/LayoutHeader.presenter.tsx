import { useContext } from "react";
import { LayoutContext } from "../index";

const LayoutHeaderUI = () => {
  const { test } = useContext(LayoutContext);

  return <div>헤더영역: {test}</div>;
};

export default LayoutHeaderUI;
