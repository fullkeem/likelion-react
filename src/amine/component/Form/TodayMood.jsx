export default function TodayMood({
  feelMessage,
  initialFeelMessage,
  handleChange,
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 4,
      }}
    >
      {/* 
            Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
          */}
      <label htmlFor="feel-today">오늘 기분</label>
      <input
        id="feel-today"
        type="text"
        placeholder={initialFeelMessage}
        // 컨트롤 컴포넌트
        // value 속성에 리액트가 제어하는 상태가 연결
        // 리액트가 제어하는 인풋
        value={feelMessage}
        // defaultValue={feelMessage}
        onChange={handleChange}
        // readOnly={true}
        // readOnly
      />
    </div>
  );
}
