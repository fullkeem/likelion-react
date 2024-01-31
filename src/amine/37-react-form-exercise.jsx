import { useId, useState } from 'react';
import { A11yHidden } from '../components';

function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <FormExample />
    </div>
  );
}

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~';

// 컴포넌트 추출
function FormExample() {
  const [feelMessage, setFeelMessage] = useState(INITIAL_FEEL_MESSAGE);

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };

  const handleChange = (e) => {
    setFeelMessage(e.target.value);
  };

  return (
    <>
      <form>
        <FormInput
          label="오늘 기분"
          placeholder={INITIAL_FEEL_MESSAGE}
          gap={6}
          value={feelMessage}
          onChange={handleChange}
        />
        <ButtonGroup
          onUpdate={handleUpdateFeelMessage}
          resetMessage={INITIAL_FEEL_MESSAGE}
        />
        <FormOutput outputValue={feelMessage} />
      </form>

      <FormTextArea value={feelMessage} onChange={handleChange} />
    </>
  );
}

function FormInput({
  as: ComponentName = 'div',
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  gap = 4,
  style: customStyle,
  hiddenLabel = false,
  ...restProps
}) {
  const id = useId();

  let labelElement = <label htmlFor={id}>{label}</label>;

  if (hiddenLabel) {
    labelElement = (
      <A11yHidden as="label" htmlFor={id}>
        {label}
      </A11yHidden>
    );
  }

  return (
    <ComponentName
      style={{
        display: 'flex',
        gap,
        ...customStyle,
      }}
      {...restProps}
    >
      {labelElement}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </ComponentName>
  );
}

function ButtonGroup({
  onUpdate,
  displayMessage = '맑음',
  resetMessage = '모름',
}) {
  return (
    <div style={{ marginBlockStart: 12, display: 'flex', gap: 4 }}>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(displayMessage);
        }}
      >
        표시
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(resetMessage);
        }}
      >
        초기화
      </button>
    </div>
  );
}

function FormOutput({ outputValue }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <output>{outputValue}</output>
    </div>
  );
}

function FormTextArea({ value, onChange }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <A11yHidden as="label" htmlFor="feel-today-textarea">
        오늘 기분
      </A11yHidden>
      <textarea id="feel-today-textarea" value={value} onChange={onChange} />
    </div>
  );
}

export default Exercise;
