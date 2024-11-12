import { useState } from 'react'; // useState 훅을 불러옵니다. 상태를 관리하여 UI와 데이터를 실시간으로 연결하는 역할을 합니다.
import './App.css'; // App.css 파일을 불러옵니다. 이 파일은 스타일을 정의하며, 각 컴포넌트의 외형을 꾸밉니다.
import CountResult from './CountResult'; // CountResult 컴포넌트를 불러옵니다. 이 컴포넌트에 count 값을 전달할 것입니다.

function App() {
  // 1. count라는 상태를 만들고, 상태를 업데이트할 수 있는 setCount 함수를 정의합니다.
  // useState(0)를 사용하여 초기값을 0으로 설정했습니다. 
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>⏰ 카운트 앱 생성하기 </h1>
      <p>버튼을 누를 때 마다 버튼이 실시간으로 변경되도록 구현해 주세요.</p>

      {/* 현재 count 값을 보여줍니다. JSX 안에서 {}를 사용하여 동적으로 count 값을 출력합니다. */}
      <h2>count: {count}</h2>
      
      {/* count 상태를 증가시키는 버튼입니다. onClick 이벤트 핸들러로 setCount(count + 1) 함수를 호출하여 클릭 시 count 값을 1 증가시킵니다. */}
      <button onClick={() => setCount(count + 1)}>+</button>
      
      {/* count 상태를 감소시키는 버튼입니다. onClick 이벤트 핸들러로 setCount(count - 1) 함수를 호출하여 클릭 시 count 값을 1 감소시킵니다. */}
      <button onClick={() => setCount(count - 1)}>-</button>
      
      {/* 2. CountResult 컴포넌트에 count 값을 props로 전달하여, 자식 컴포넌트에서 이 값을 사용할 수 있도록 합니다. */}
      <CountResult count={count} />
    </>
  );
}

export default App; // 이 App 컴포넌트를 다른 파일에서도 사용할 수 있도록 내보냅니다.
