// @ts-ignore
const { createRoot } = ReactDOM;

const createApp = () => {
  return (
    <div id="app">
      <h1>
        안녕! <br /> 리엑트
      </h1>
      <p>리엑트는 오픈 소스 자바스크립트 라이브러리입니다.</p>
    </div>
  );
};

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(createApp());
