import { A11yHidden } from '@/components';
import { number } from 'prop-types';
import { useId, useState } from 'react';
import { useToggle } from '@/hooks';
import { useCallback } from 'react';

function Exercise() {
  // const [isVisible, setIsVisible] = useState(true);
  // const handleToggle = () => setIsVisible((v) => !v);

  const { value: isVisible, toggle } = useToggle(true);

  return (
    <div>
      {isVisible && <h2>useCallback vs. useMemo</h2>}
      <button type="button" onClick={toggle}>
        {isVisible ? '제목 감춤' : '제목 표시'}
      </button>
      <Counter min={5} count={9} max={32} />
    </div>
  );
}

// useCallback 훅
// - 리-렌더링 할 때 마다 함수 정의가
//   매번 초기화 되지 않도록 기억(memo, cache)하려고 사용하는 훅

function Counter({ min = 0, count = 0, step = 1, max = 50 }) {
  const id = useId();

  const [value, setValue] = useState(count);

  // const handleChange = useCallback(함수값, [종속성])
  const handleChange = useCallback((e) => {
    const nextValue = Number(e.target.value);
    setValue(nextValue);
  }, []);

  const handleCountUp = useCallback(() => {
    const nextValue = value + step;
    setValue(nextValue);
  }, [value, step]);

  // const handleCountDown = () => {
  //   const getNextValue = (v) => v + step;
  //   setValue(getNextValue);
  // };

  const handleCountDown = () => {
    setValue((v) => v - step);
  };

  return (
    <div className="flex gap-1 my-5" aria-labelledby={id}>
      <A11yHidden as="h3" id={id}>
        카운트
      </A11yHidden>
      <button
        type="button"
        aria-label="카운트 감소"
        title="카운트 감소"
        className="mr-4"
        onClick={handleCountDown}
      >
        -
      </button>
      <input
        type="number"
        min={min}
        value={value}
        onChange={handleChange}
        step={step}
        max={max}
        className="bg-transparent"
      />
      <button
        type="button"
        aria-label="카운트 증가"
        title="카운트 증가"
        onClick={handleCountUp}
      >
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  min: number,
  count: number,
  step: number,
  max: number,
};

export default Exercise;
