import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면 - 초록, 지면 - 빨강, 비기면 - 검은색)

const choice = {
  rock: {
    name: "Rock",
    img: "https://short-biography.com/wp-content/uploads/dwayne-johnson-the-rock/Dwayne-Johnson.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "https://i.namu.wiki/i/ylTAhCZyHI0pHP4zweEWCtuMTHGMhBEllUHa86sAaxd9SJ1TPUpqi5pzgsAGyCy90EeONqzf5Egi1YK6NTpmgEPvlgQ8wSqlJPRHeAqN3GTB-phSnJZJGPkuMEBAAsw0U4YAyHO7XdeSQVPuhB03JQ.webp"
  },
  paper: {
    name: "Paper",
    img: "https://th.bing.com/th/id/OIP.iTwcNNAT8EJeUtcqf07WMwHaE9?rs=1&pid=ImgDetMain"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  };
  return (
    <div>
      <div className='main'>
        <Box title="you" item={userSelect} result="Loser"/>
        {/* <Box title="computer" result="winner"/> */}
      </div>
      <div className='main'>
        {/* 함수를 호출하는 형태가 아닌 콜백하는 형태를 넣어줘야 함 */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
