import './App.scss'
import avatar from './images/bozai.png'
import {useState, useRef} from 'react'
import _, { divide } from 'lodash'
import classNames from 'classnames'

// React中获取DOM
// 1.useRef生成ref对象，绑定到dom标签上
// 2.dom可用时，ref.current获取dom（渲染完毕之后，dom生成之后才可用）
const App = ()=> {
  const inputRef = useRef(null)
  const showDom = ()=> {
    console.log(inputRef.current)
    // 展开属性
    console.dir(inputRef.current)
    // 获取input框输入值
    console.log(inputRef.current.value)
  }
  return (
    <div>
      <input ref={inputRef} type='text'/>
      <button onClick={showDom}>获取DOM</button>
    </div>
  )
}

export default App