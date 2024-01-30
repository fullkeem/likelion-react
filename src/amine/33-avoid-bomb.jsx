import { useState } from 'react';
import classes from './33-avoid-bomb.module.css';

let renderCount = 0;

function Exercise() {
  // 리액트 (선언형 프로그래밍)
  // 상태 선언 방식
  // React.useState() 훅 함수
  // 상태 변경 트리거(요청) -> 리액트 감지 -> 렌더(가상DOM) ->
  // (스냅샷 비교, 재조정) 변경이 있을 경우 -> 커밋(DOM 반영) -> 페인팅

  // 어떤 상태??? 게임 재생/일시정지 제어
  // 게임 중인가요? (isPalying) => 네(T), 아니요(F) => boolean 타입
  const [isPlaying, setIsPlaying] = useState(false /* 초깃값: initial value*/);

  // 상태 :: 게임재생 / 일시정지 제어
  // const gameClassNames = `${classes.game} ${classes.stop}`.trim();

  const gameClassNames = `${classes.game} ${
    !isPlaying ? classes.stop : ''
  }`.trim();

  const handleBall = () => {
    globalThis.alert('게임 승 😎');
  };
  const handleBomb = () => {
    globalThis.alert('게임 패! 😒');
  };

  const handleToggle = () => {
    setIsPlaying(/* [2] callback api */ (isPlaying) => !isPlaying);
  };

  // [1] new value
  // const handleStart = () => {
  //   const nextIsPlaying = true;
  //   //상태 변경 요청(trigger) -> 리엑트 UI 렌더링(함수 컴포넌트 다시 실행 => JSX 다시 반환)
  //   setIsPlaying(nextIsPlaying);
  // };

  // const handlePause = () => {
  //   const nextIsPlaying = false;
  //   //상태 변경 요청(trigger) -> 리엑트 UI 렌더링(함수 컴포넌트 다시 실행 => JSX 다시 반환)
  //   setIsPlaying(nextIsPlaying);
  // };

  console.log('render', ++renderCount);

  return (
    <>
      <div className={gameClassNames}>
        <button
          className={classes.ball}
          aria-label="공(ball)"
          onClick={handleBall}
        />
        <button
          className={classes.bomb}
          aria-label="폭탄(bomb)"
          onClick={handleBomb}
        >
          <span role="img">💣</span>
        </button>
      </div>
      <div className={classes.gameControls} role="group">
        <button
          type="button"
          aria-label="게임 시작"
          onClick={handleToggle}
          disabled={isPlaying}
        >
          start
        </button>
        <button
          type="button"
          aria-label="게임 일시정지"
          onClick={handleToggle}
          disabled={!isPlaying}
        >
          pause
        </button>
      </div>
    </>
  );
}

export default Exercise;
