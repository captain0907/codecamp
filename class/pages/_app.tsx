import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GlobalStyles from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext({
  accessToken: "",
  setAccessToken: (_: string) => {},
});
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");

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
    <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
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
