import { useState, useEffect } from "react";
import styled from "styled-components";
import 'bootstrap-icons/font/bootstrap-icons.css';



const Allmenu = styled.button`
font-family: 'bootstrap-icons';
background-color: white;
border: 0px;
  &.close:before{
    content : '\\F479';
    font-size : 30px;
  }
  &:before{
    content : '\\F62A';
    font-size : 30px;
  }
`

function App() {
// 렌더링 html이 생성완료된 시점
// window.onload와 같은 개념
// 웹으로 제작한 자바스크립트 여기에 넣어준다
  useEffect(() => {
    document.querySelector('#allMenu').addEventListener("click",function(){
      this.classList.toggle('close')
    })
  }, [])
  
  return (
    <div className="App">
      <div>
        <Allmenu className="close" id="allMenu"></Allmenu>
      </div>
    </div>
  );
}

export default App;
