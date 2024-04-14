
const name = '赵静超'
function fun1() {
  return '王颖'
}

function App() {
  return (
    <div className="App">
      this is App
      {/* 使用引号传递字符串 */}
      {'this is a String'}
      {/* 识别JS变量 */}
      {name}
      {/* 函数调用 */}
      {fun1()}
      {/* 方法调用 */}
      {new Date().getTime()}
      {/* 使用JS对象 */}
      <div style={{color:'red'}}>使用JS对象</div>
    </div>
  );
}

export default App;
