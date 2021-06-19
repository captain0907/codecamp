import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component) => (props) => {
  // props
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  // 토큰체크
  useEffect(() => {
    if (!accessToken) router.push("/login");
  }, []);

  if (!accessToken) return <></>;
  return <Component {...props} />;
};

export default withAuth;
