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
  return (
    <div>children data, {props.children}</div>
  )
}
function App() {
  const data = 'this is parent component data'
  return (
    <div>
      {/* <Son 
        name={data}
        age={18}
        isTrue={false}
        list={['React', 'Vue', 'Angular']}
        obj={{nickname: 'zjc'}}
        cb={() => {console.log('this is a callback function')}}
        jsx={<span>this is span</span>}
      /> */}
      <Son name={data}>
        <span>this is span</span>
      </Son>
    </div>
  )
}

export default App