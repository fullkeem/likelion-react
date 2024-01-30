import { useState } from 'react';

function Box({ boxMessage, onChangeMessage }) {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        padding: 20,
      }}
    >
      <b>{boxMessage}</b>
      <button
        type="button"
        style={{
          marginBlockStart: 12,
        }}
        onClick={() => {
          // prop 변경 시도 (안됨. 이유는 읽기 전용이니까)
          // 감히 자식이 부모에게 물려받은 [성]을 바꾸려 하는 것과 같다.
          // boxMessage += '🎩';

          // 그렇다면?
          // 부모의 상태를 자식이 바꾸려면?
          // 부모의 상태를 변경할 수 있는 업데이트 함수를 prop으로 자식에게 전달
          // 자식은 전달받은 업데이트 함수(참조)를 실행
          onChangeMessage((boxMessage += '🎩'));
          // 결과적으로 부모 내부에 있는 업데이트 함수가 실행
          // 부모의 상태를 바꾼다.
          // 부모가 다시 그려진다.
          // 자식도 다시 그려진다. (prop이 변경된다.)
        }}
      >
        change boxMessage prop
      </button>
    </div>
  );
}

const messages =
  '최강! 8기, 상원님 1위에서 끌어내리기, 야무지게 먹어야지'.split(', ');

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

export default function Exercise() {
  const [message, setMessage] = useState(getRandomMessage);

  const handleChangeMessage = (nextMessage) => {
    setMessage(nextMessage);
  };

  return (
    <div>
      <p>{message}</p>
      <button
        type="button"
        onClick={() => handleChangeMessage(getRandomMessage())}
      >
        change message
      </button>
      <hr />
      <Box boxMessage={message} onChangeMessage={handleChangeMessage} />
    </div>
  );
}
// 리액트 DOM (리엑트 컴포넌트 -> 리엑트 엘리먼트) 간의 모델(관계)
// 루트 엘리먼트 트리 구조
// 부모 - 자식 -형제
