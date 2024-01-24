function ButtonBox() {
  return (
    <div
      role="group"
      style="display: flex; flex-flow: column; gap: 4px; inline-size: 120px; margin: 20px;"
    >
      <button
        type="button"
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          border: '1px solid',
          borderColor: '#7f7f7f',
          borderRadius: 4,
          padding: 8,
          color: '#7f7f7f',
          backgroundColor: '#fff',
        }}
      >
        수정하기
        <svg
          style={{ inlineSize: 16, translate: '0 -2px' }}
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
    </div>
  );
}

export default ButtonBox;
