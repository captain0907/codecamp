import { useLazyQuery, useQuery } from "@apollo/client";

const QwerPage2 = () => {
  //   const { data } = useQuery(댓글);

  const [aaa, { data }] = useLazyQuery(댓글);

  const onClickQuery = () => {
    aaa();
  };

  return (
    <div>
      {/* {data?.fetchComments?.map((comment) => (
        <div>{comment?.title}</div>
      ))} */}
      <button onClick={onClickQuery}>쿼리불러오기</button>
    </div>
  );
};

export default QwerPage2;
