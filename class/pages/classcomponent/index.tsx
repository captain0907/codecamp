import { Component, createRef, RefObject } from "react";

class MyClassPage extends Component {
    private inputRef: RefObject<HTMLInputElement>
    constructor(props){
        super(props)
        this.state = {}
        this.inputRef = createRef()
    }

    componentDidMount() {
        console.log('aaaa')
        this.inputRef.current.focus()
    }

    componentDidUpdate() {
        console.log('bbb')
    }

    onChangeInput(event){
        this.setState({ [event.target.name]: event.target.value })
    }


    render(){
        return (
            <div>
                <span>이름: </span><input ref={this.inputRef}  type="text" name="name" onChange={this.onChangeInput.bind(this)}></input><br />
                <span>나이: </span><input type="text" name="age" onChange={this.onChangeInput.bind(this)}></input><br />
                <span>학교: </span><input type="text" name="school" onChange={this.onChangeInput.bind(this)}></input><br />
            </div>
        )
    }
}

export default MyClassPage