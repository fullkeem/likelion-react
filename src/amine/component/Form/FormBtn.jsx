export default function FormBtn() {
  return (
    <>
      <button
        type={btnType}
        onClick={() => {
          handleUpdateFeelMessage('맑음');
        }}
      >
        {btnName}
      </button>
    </>
  );
}
