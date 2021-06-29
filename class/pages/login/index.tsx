import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  // const [fetchUserLazy, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {

  //   data.fetchUserInfo

  // }, [data])

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      setAccessToken(data?.loginUserExample.accessToken);
      // fetchUserLazy({
      //   context: {
      //     headers: { authorization: data?.loginUserExample.accessToken },
      //   },
      // });
      const userInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: { authorization: data?.loginUserExample.accessToken },
        },
      });
      setUserInfo(userInfo.data.fetchUserLoggedIn);

      // userInfo;

      router.push("/tokentest/tokentest2");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickLoginGoogle = () => {
    window.open("https://backend.codebootcamp.co.kr/api/login/google/callback");
  };

  return (
    <form>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호:
      <input type="password" autoComplete="on" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
      <button onClick={onClickLoginGoogle}>소셜로그인하기</button>
    </form>
  );
};

export default LoginPage;
