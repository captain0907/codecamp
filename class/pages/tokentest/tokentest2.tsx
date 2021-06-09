import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import withAuth from "../../src/components/commons/hocs/withAuth";

const FETCH_USEDITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
    }
  }
`;

// 회원만 볼 수 있는 페이지
const TokenTest2Page = (props) => {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEMS);
  console.log("data", data);

  const onClickMove = () => {
    router.push("/tokentest/tokentest1");
  };

  return <button onClick={onClickMove}>전체공개 페이지로 이동하기</button>;
};

export default withAuth(TokenTest2Page)("http://localhost:3000");
