import { Router } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

const withAuth = (Component) => (props) => {
  // const { accessToken } = useContext(GlobalContext);

  // useEffect(() => {
  //   if (!accessToken) Router.push("/");
  // }, []);

  return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);
