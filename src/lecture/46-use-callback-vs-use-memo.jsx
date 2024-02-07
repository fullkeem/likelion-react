import { A11yHidden } from '@/components';
import { useToggle } from '@/hooks';
import { number } from 'prop-types';
import { useId } from 'react';

function Exercise() {
  const [value, toggle] = useToggle(true);
  return (
    <div>
      <h2>useCallback vs. useMemo</h2>
      <Counter min={5} count={9} step={2} max={32} />
    </div>
  );
}

function Counter({ min = 0, count = 0, step = 1, max = 50 }) {
  const id = useId();

  const handleChange = (e) => {};

  return (
    <div className="flex gap-1" aria-labelledby={id}>
      <A11yHidden as="h3" id={id}>
        카운트
      </A11yHidden>
      <button type="button" aria-label="카운트 감소">
        -
      </button>
      <input
        type="number"
        min={min}
        value={count}
        onChange={handleChange}
        step={step}
        max={max}
      />
      <button type="button" aria-label="카운트 증가">
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
