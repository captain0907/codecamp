import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUserExample({
        variables: { email, password },
      });
      setAccessToken(data?.loginUserExample.accessToken);
      router.push("/tokentest/tokentest2");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호:
      <input type="password" autoComplete="on" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </form>
  );
};

export default LoginPage;
