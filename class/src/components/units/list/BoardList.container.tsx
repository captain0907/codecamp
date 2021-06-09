import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

const BoardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, fetchMore } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { page: currentPage },
  });
  const [hasMore, setHasMore] = useState(true);

  const onClickPage = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const onLoadMore = () => {
    if (data?.fetchBoards.length % 10 !== 0) return;

    fetchMore({
      variables: { page: Math.floor(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => ({
        fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
      }),
    });
  };

  return (
    <BoardListUI
      data={data}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
    />
  );
};

export default BoardList;
