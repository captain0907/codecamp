import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  useQuery,
  useLazyQuery,
  useApolloClient,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GlobalStyles from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useState } from "react";
import Head from "next/head";

// // 1.
// const {data} = useQuery(FETCH_USER) // 컴포넌트가 그려질때 자동실행

// // 2.
// const [aaa, {data}] = useLazyQuery(FETCH_USER) // 내가 요청하고 싶을때 aaa() 이걸로 실행
// aaa()

// // 3.
// const client = useApolloClient() // 내가 요청하고 싶을때
// const result = await client.query({ query: FETCH_USER }) // 이걸로 실행 (axios 비슷)
// result.data.fetchUser // 유저정보 들어옴

export const GlobalContext = createContext({
  accessToken: "",
  setAccessToken: (_: string) => {},
  userInfo: {},
  setUserInfo: (_: string) => {},
});
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const uploadLink = createUploadLink({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  // @ts-ignore
  // const errorLink = onError(async ({graphQLErrors, operation, forward}) => {
  //   if(graphQLErrors){
  //     for(let err of graphQLErrors){
  //       if(err.extensions.code === "UNAUTHENTICATED") {
  //         // 만료된 토큰을 재발급 받기
  //         const response = await axios.post(
  //           "http://localhost:4000/graphql",
  //           {
  //               query: `
  //                 mutation restoreAccessToken {
  //                   restoreAccessToken {
  //                     accessToken
  //                   }
  //                 }
  //               `
  //           },
  //           {
  //             headers: {"Content-Type": 'application/json'},
  //             withCredentials: true
  //           }
  //         )
  //         const newAccessToken = response.data.data.restoreAccessToken.accessToken
  //         setAccessToken(newAccessToken)

  //         // 재발급 받은 토큰으로 실패했던 쿼리 다시 날리기
  //         operation.setContext({
  //           headers: {
  //             ...operation.getContext().headers,
  //             authorization: `Bearer ${newAccessToken}`
  //           }
  //         })
  //         return forward(operation)
  //       }
  //     }
  //   }
  // })

  const client = new ApolloClient({
    // @ts-ignore
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider
      value={{ accessToken, setAccessToken, userInfo, setUserInfo }}
    >
      <ApolloProvider client={client}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
