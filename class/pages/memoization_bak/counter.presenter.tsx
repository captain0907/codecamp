import { memo } from "react";

const CounterPresenter = ({ count1 }) => {
  console.log("자식 프리젠터가 렌더링되었습니다.");
  return <button>프리젠터입니다 {count1}</button>;
};

export default memo(CounterPresenter);
