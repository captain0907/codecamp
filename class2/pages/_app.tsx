import '../styles/globals.css';
import {AppProps} from 'next/app'

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

function MyApp({Component, pageProps}: AppProps) {
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
