import React, {useState, useEffect} from "react";


function App() {
  const [count, setCount] = useState(0);
  const bgcolor = ["red", "green", "blue","pink","yellow"];

  // body태그의 배경색
  // useEffect(()=>{}, []) -> useeffect의 시작 시점 ( usestate가 초기화 시켜주면 )

  useEffect(()=>{
    document.body.style.backgroundColor = bgcolor[count];
  }, [count])


  return (
    <div className="App">
    <button onClick={()=>{
      setCount(count < bgcolor.length -1 ? count + 1 : 0); // 값에 대한 연산식만 사용가능 (대입식 사용불가 ex) count++, count=count+1))
    }}> {count} 증가해줘</button>

    <button onClick={()=>{
      setCount(count > 0 ? count - 1 : bgcolor.length - 1); 
    }}> {count} 감소해줘</button>
    </div>
  );
}

export default App;
