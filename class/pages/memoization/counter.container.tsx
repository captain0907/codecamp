import { useCallback, useState } from "react";
import CounterPresenter from "./counter.presenter";

const CounterContainer = () => {
  let count1 = 0;
  const [count2, setCount2] = useState(0);

  const onClickCount1 = () => {
    console.log("count1", count1);
    count1 = count1 + 1;
  };

  const onClickCount2 = () => {
    console.log("count2", count2);
    setCount2(count2 + 1);
  };

  console.log("부모 컨테이너가 렌더링되었습니다.");
  return (
    <>
      <div>count1: {count1}</div>
      <button onClick={onClickCount1}>+1</button>

      <div>count2: {count2}</div>
      <button onClick={onClickCount2}>+1</button>

      <CounterPresenter count1={count1} />
    </>
  );
};

export default CounterContainer;
