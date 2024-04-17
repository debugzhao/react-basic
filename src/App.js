import './App.scss'
import avatar from './images/bozai.png'
import {useState} from 'react'
import _, { divide } from 'lodash'
import classNames from 'classnames'

// 父子组件之间通信
// 1.父组件传递数据
// 2.子组件通过props接受数据
const Son = (props)=> {
  console.log(props)
  // sonCb箭头函数接收父组件传递过来的回调函数
  const sonCb = () => props.cb()
  sonCb()
  return (
    <div>children data, {props.name}, {props.jsx}</div>
  )
}
function App() {
  const data = 'this is parent component data'
  return (
    <div>
      <Son 
        name={data}
        age={18}
        isTrue={false}
        list={['React', 'Vue', 'Angular']}
        obj={{nickname: 'zjc'}}
        cb={() => {console.log('this is a callback function')}}
        jsx={<span>this is span</span>}
      />
    </div>
  )
}

export default App