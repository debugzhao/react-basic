// useState实现一个计数器按钮
import {useState} from 'react'

const name = '赵静超'
function fun1() {
  return '王颖'
}

const list = [
  {id:'101', name:'React'},
  {id:'102', name:'Vue'},
  {id:'103', name:'Angular'}
]

const isLogin = false

// 事件参数e
const handleClick = (e) => {
  console.log('button被点击了', e)
}

// 传入自定义参数
const handleClick1 = (arg) => {
  console.log('button被点击了', arg)
}

// 传入自定义参数 + 事件参数event
const handleClick2 = (arg, e) => {
  console.log('button被点击了', arg, e)
}

const Button = () => {
  return (
    <button>Click Me!</button>
  )
}

function App() {
  // useState添加一个状态变量，返回的是一个数组
  // 数组中的第一个参数是状态变量，第二个参数是修改状态变量的方法
  // useState参数将作为count的初始值
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({name: '赵静超'})
  // 点击事件回调函数
  const handleClick = ()=> {
    // 1.用传入的新值修改count
    // 2.重新使用新的count渲染UI
    setCount(count + 1);
  }
  
  // 修改对象属性
  const changeForm = ()=> {
    setForm({
      // 通过展开运算符，将form对象中的属性复制到新对象中
      ...form,
      name: '王颖'
    })
  }
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改{'  '}{form.name}</button>
    </div>
  );
}

export default App;
