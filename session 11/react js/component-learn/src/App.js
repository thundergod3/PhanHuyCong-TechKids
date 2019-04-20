import React, { Component } from 'react';
import './App.css';

import './chip.css'
import './btn.css'
import Chip from './chip';
import Title from './title';

// const data = [
//   {
//     name: 'Cao Ghi Danh',
//     status: 'untested',
//   },
//   {
//     name: 'Văn Đỗ Đạt',
//     status: 'passed',
//   },
//   {
//     name: 'Nguyễn Văn Tạch',
//     status: 'failed',
//   }
// ];

// const statusMap = {
//   'untested': {
//     text: 'Untested',
//     color: 'gray',
//   },
//   'passed': {
//     text: 'Passed',
//     color: 'green',
//   },
//   'failed': {
//     text: 'Failed',
//     color: 'red',
//   },
// } 

// const Item = (props) => {
//   console.log(props.s);
  
//   const statusProps = statusMap[props.s];
//   return (
//     <div>
//       <div className='item-name'>{props.name}</div>
//       <Chip text={statusProps.text} color={statusProps.color}/>
//     </div>
//   )
// }

// simpleData.map(
//   (nameData, index) => (<div key={index.toString()}>{nameData}</div>)
// )

class App extends Component {
  // render() {
  //   return (
  //   //   <div>
  //   //     {
  //   //       data.map(
  //   //         (itemData) => (<Item name={itemData.name} s={itemData.status} />)
  //   //       )
  //   //     }
  //   //   </div>
  //   // );
  // }

  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  plus() {
    this.setState({ score: this.state.score + 1 })
  }

  minus() {
    this.setState({ score: this.state.score -1 })
  }

  render() {
    return(
      <div className='btn-bg'>
        <button className='btn plus' onClick={this.plus.bind(this)} >+</button>
        <p className='score'>{this.state.score}</p>
        <button className='btn minus' onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}

export default App;
