
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

function App() {
  return (
    <div className="App">
      this is App
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {/* 逻辑与 && */}
      {isLogin && <p>{name}</p>}
      {/* 三元运算符 */}
      <p>{isLogin ? <span>jack</span> : <span>loading...</span>}</p>
    </div>
  );
}

export default App;
