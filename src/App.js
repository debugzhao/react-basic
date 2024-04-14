
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

function App() {
  return (
    <div className="App">
      this is App
      <button onClick={(e) => handleClick2('自定义参数', e)}>按钮</button>
    </div>
  );
}

export default App;
