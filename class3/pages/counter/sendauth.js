import {useState} from 'react'

function SendauthPage(){

    // let token = '000000'
    const [token, setToken] = useState('000000')

    function sendAuth(){
        const phoneToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        setToken(phoneToken)
    }

    return (
        <>
            <span>{token}</span>
            <button onClick={sendAuth}>인증번호 전송</button>
        </>
    )

}

export default SendauthPage