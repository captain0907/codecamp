import { useState } from "react"

function FunctionComponentPage() {

    const [state, setState] = useState()

    return (
        <div>
            <input type="text" placeholder="이름을 입력해 주세요." /><br />
            <input type="text" placeholder="나이를 입력해 주세요." /><br />
            <input type="text" placeholder="학교를 입력해 주세요." /><br />
        </div>
    )
}