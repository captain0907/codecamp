import { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  function login () {
    console.log(email)
    console.log(pw)
    // console.log("로그인입니다.")
  }

  function emailChange (event) {
    const temp = event.target.value
    setEmail(temp)
    // console.log("이메일이 변경된 것 같습니다.")
  }

  function passwordChange (event) {
    const temp = event.target.value
    setPw(temp)
    // console.log("비밀번호가 변경된 것 같습니다.")
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
  )
}

export default LoginPage
