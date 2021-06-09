import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component) => {
  // 컴포넌트

  //   console.log("asdfsadfs");

  return function (urlProps) {
    return function (ownProps) {
      // props
      const router = useRouter();
      const { accessToken } = useContext(GlobalContext);

      // 토큰체크
      useEffect(() => {
        if (!accessToken) router.push("/login");
      }, []);

      console.log("===================");
      console.log("===================");
      console.log(urlProps);
      console.log("===================");
      console.log("===================");

      if (!accessToken) return <></>;
      return <Component {...ownProps} />;
    };
  };
};

export default withAuth;
