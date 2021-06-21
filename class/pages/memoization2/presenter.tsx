import { memo } from "react";

const PresenterPage = ({ onClickCountState }) => {
  console.log("프리젠터(자식) 렌더링됨");

  return <div>프리젠터(자식) 입니다</div>;
};

export default memo(PresenterPage);
