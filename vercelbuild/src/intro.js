import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css' ;

import logo from './logo.svg';
// png, gif, jpg 는 경로로 가져와서 사용가능
// svg는 xml태그로 이루어진 모듈이기때문에 import로 가져온다


const App = (props) => { // function app(){} 로 되어있던걸 const App = () => {}로 수정함 ( 변수적용 )
  return (
    <header id="hd" className={props.bgcls}>
      <div className='container d-flex justify-content-between align-items-center'>
        <h1 className='col-4 col-md-2'>
          <a href="/" className='d-block'>
            <img src={logo} className='w-100' alt="" />
          </a>
        </h1>
        <ul id="gnb" className='d-flex'>
          <li><a href="" className={props.textcls}>대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;
