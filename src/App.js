import './App.scss'
import avatar from './images/bozai.png'
import {useState} from 'react'
import _, { divide } from 'lodash'
import classNames from 'classnames'


// 核心思想：子组件中调用父组件中的函数并传递实参
const Son = ({onGetSonMsg})=> {
  // 子组件中的数据
  const msg = 'this is son msg'
  return (
    <div>
      Children data
      <button onClick={() => onGetSonMsg(msg)}>SendMsg</button>
    </div>
  )
}

function App() {
  const [sonData, setSonData] = useState('')
  const getMsg = (msg) => {
    setSonData(msg)
  }

  return (
    <div>
      Parent data, {sonData}
      <Son onGetSonMsg={getMsg}/>
    </div>
  )
}

export default App