import React, {useState, useEffect} from "react";


function App() {
  const [count, setCount] = useState(0);
  const bgcolor = ["red", "green", "blue"];

  return (
    <div className="App">
    <button onClick={()=>{
      setCount(count + 1); // 값에 대한 연산식만 사용가능 (대입식 사용불가 ex) count++, count=count+1))
    }}> {count} 증가해줘</button>

    <button onClick={()=>{
      setCount(count - 1); 
    }}> {count} 감소해줘</button>
    </div>
  );
}

export default App;
