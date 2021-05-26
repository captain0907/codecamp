import { Component, createRef, RefObject } from "react";
import ClassChild from "./classChild";

interface IProps {

}

interface IState {
    count: number
}

class ClassComponentPage extends Component<IProps, IState> {
    private inputRef: RefObject<HTMLInputElement>
    constructor(props){
        super(props)
        console.log(props)
        this.state = { count: 0 }
        this.inputRef = createRef();
    }


    componentDidMount(){
        this.inputRef.current.focus()
    }

    
    componentDidUpdate(){
        console.log('업데이트입니다')
    }


    render() {
        return (
            <div>
                <ClassChild count={this.state.count}/>
                <input type="text" placeholder="이름을 입력해 주세요." ref={this.inputRef} /><br />
                <input type="text" placeholder="나이를 입력해 주세요." /><br />
                <input type="text" placeholder="학교를 입력해 주세요." /><br />
            </div>
        )
    }
}

export default ClassComponentPage