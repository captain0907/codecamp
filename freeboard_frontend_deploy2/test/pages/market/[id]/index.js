import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";

const MarketPage = (pageProps) => {
  const router = useRouter();

  console.log("hi~component");

  return (
    <>
      <Head>
        <meta property="og:title" content={pageProps.title} />
        <meta property="og:description" content={pageProps.content} />
      </Head>
      <div>게시물: {router.query.id}번</div>
      <Link href="/">클릭해서 메인으로 돌아가기</Link>
    </>
  );
};

export default MarketPage;

export const getServerSideProps = async (context) => {
  console.log("hi~~~");
  const { data } = await axios.get(
    `https://koreanjson.com/posts/${context.query.id}`
  );
  return { props: { ...data } };
};
