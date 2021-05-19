// 1번째 방법
// function TimerPage(){

// }

// export default TimerPage


// 2번째 방법
// export default function TimerPage(){

// }

import {useState} from 'react'

export default function TimerPage(){

    const [aaa, setAaa] = useState(false)

    function handleClickSendAuth(){

        if(aaa === true){
            setAaa(false)
        } else if(aaa === false){
            setAaa(true)
        }

        setAaa((prev) => {
            // 만약 aaa가 true라면 => prev = true

            // 만약 aaa가 false라면 => prev = false
        })

        setAaa(prev => !prev) // 만약 현재 aaa가 false라면, setAaa(true)
                              // 만약 현재 aaa가 true라면, setAaa(false)

        


        // let time = 5
        // const bbb = setInterval(function(){

        // })


    }

    return (
        <div>
            <div>
                <input type="text" value="asdf"></input> 
                <button onClick={handleClickSendAuth}>인증번호 전송</button>
            </div>
            <div>
                <span>0:0</span>
                <button disabled>인증완료</button>
            </div>
        </div>
    )
}