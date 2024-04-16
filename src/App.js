import './App.scss'
import avatar from './images/bozai.png'
import {useState} from 'react'
import _, { divide } from 'lodash'
import classNames from 'classnames'

// 受控表单绑定
// 1.通过value属性绑定react状态
// 2.绑定onChange事件，通过事件参数e拿到输入框最新的值，反向修改react状态
function App() {
  const [value, setValue] = useState('')
  return (
    <div>
      <input value={value}
        onChange={e => setValue(e.target.value)}
        type='text'
      />
    </div>
  )
}

export default App