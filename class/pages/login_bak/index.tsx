import { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(AuthContext);

  async function login() {
    const { data } = await loginUser({
      variables: { email, password },
    });
    setAccessToken(data.loginUser.accessToken);
    router.push("/youtube");
  }

  function emailChange(event) {
    setEmail(event.target.value);
  }

  function passwordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <div>로그인</div>
      Email: <input type="text" onChange={emailChange} />
      <br />
      PW: <input type="password" onChange={passwordChange} />
      <br />
      <button onClick={login}>로그인하기</button>
    </div>
  );
};

export default LoginPage;
