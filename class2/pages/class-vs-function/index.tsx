import {Component} from 'react';

export default class ClassVsFunction extends Component {
  constructor(props: any) {
    super(props);
    this.state = 'asdf';
    this.handleClickFunction = this.handleClickFunction.bind(this);
  }

  handleClickFunction() {
    console.log(this.state);
    console.log('hello!!');
  }

  aaa() {}

  render() {
    return <button onClick={this.handleClickFunction}>버튼클릭</button>;
  }
}

// export default function () {
//   function handleClickFunction() {
//     console.log('hello!!');
//   }

//   return <button onClick={() => handleClickFunction()}>버튼클릭</button>;
// }
