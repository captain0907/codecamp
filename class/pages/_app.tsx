import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import GlobalStyles from '../src/commons/styles/globalStyles'
import Layout from '../src/components/commons/layout'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
