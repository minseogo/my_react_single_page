// 기존에 객체를 선언합니다.
const person = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland',
    myinfo : ['리액트', '노드', '뷰']
  };
  
  // 객체 구조 분해 할당을 사용하여 각 프로퍼티를 개별 변수에 할당합니다.
  const { name, age, city, myinfo } = person;
  
  console.log(name); // 'Alice'
  console.log(age); // 30
  console.log(city); // 'Wonderland'

  const {myinfo} = person;
  console.log(myinfo[0])