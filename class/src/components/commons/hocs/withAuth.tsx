import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import getAccessToken from "../../../commons/libraries/getAccessToken";

const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);

  // 토큰체크
  useEffect(() => {
    if (accessToken) return;

    const restoreAccessToken = async () => {
      const newAccessToken = await getAccessToken({ setAccessToken });
      if (!newAccessToken) router.push("/login");
    };
    restoreAccessToken();
  }, []);

  if (!accessToken) return <></>;
  return <Component {...props} />;
};

export default withAuth;
