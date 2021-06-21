import { memo } from "react";

const MemoizationPresenter = ({ countLet }) => {
  console.log("프리젠터 렌더링");
  return <div>프리젠터</div>;
};

export default MemoizationPresenter;
