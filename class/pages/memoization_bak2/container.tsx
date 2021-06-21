// https://medium.com/@freshmilkdev/reactjs-render-optimization-for-collapsible-material-ui-long-list-with-checkboxes-231b36892e20
import { Router } from "next/router";
import { useCallback, useMemo, useState } from "react";
import MemoizationPresenter from "./presenter";

const MemoizationContainer = () => {
  console.log("컨테이너 렌더링");

  let result = useMemo(() => Math.random(), []); // 복잡한 계산
  console.log(result);

  let result2 = useCallback(() => {
    setCountState((prev) => {
      console.log(prev);
      return prev + 1;
    });
  }, []);

  let countLet = 0;

  const onClickCountLet = () => {
    console.log("현재 countLet:", countLet);
    countLet += 1;
  };

  const [countState, setCountState] = useState(0);

  const onClickCountState = () => {
    console.log("현재 countState:", countState);
    setCountState((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={result2}>useCallback 실험</button>
      <div>countLet: {countLet}</div>
      <button onClick={onClickCountLet}>countLet +1</button>
      <div>countState: {countState}</div>
      <button onClick={onClickCountState}>countState +1</button>
      <div>컨테이너</div>
      <MemoizationPresenter countLet={countLet} />
    </>
  );
};

export default MemoizationContainer;
