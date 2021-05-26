import { Component } from "react";

interface IProps {
    count: number
}

interface IState {

}

class ClassChild extends Component<IProps, IState> {
    constructor(props){
        super(props)
        this.state = {}
    }

    
    componentDidMount(){

    }

    render() {
        return <div>자식컴포넌트입니다 카운트는? {this.props.count}</div>
    }
}

export default ClassChild