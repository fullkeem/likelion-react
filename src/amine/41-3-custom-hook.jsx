import { useTime } from '@/hooks';

function Exercise() {
  return (
    <div>
      <StopWatch />
      <hr className="mb-4" />
      <Timer />
    </div>
  );
}

function StopWatch() {
  // 로직 분리
  // 커스텀 훅 사용 API
  const { time, start, pause, stop, getDisplayTime } = useTime();

  return (
    <div>
      <h2>Stop Watch: {getDisplayTime(time)}초</h2>
      <div className="flex gap-2 my-4">
        <button type="button" onClick={start}>
          시작
        </button>
        <button type="button" onClick={pause}>
          일시정지
        </button>
        <button type="button" onClick={stop}>
          정지
        </button>
      </div>
    </div>
  );
}

function Timer() {
  const { stop, time, getDisplayTime, start } = useTime();

  const printTime = getDisplayTime(time, 2);

  return (
    <div>
      <button type="button" onClick={start}>
        BEGIN
      </button>
      <h2>타이머: {printTime}s</h2>
      <button type="button">{stop}</button>
    </div>
  );
}

export default Exercise;
