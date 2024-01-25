import React from "react";
import { createRoot } from "react-dom/client";

// 함수 컴포넌트 (important syntax!!!)
// declare function
// function App() {
//   return (
//     // emmit => #app[lang=en]>h1{hello react!}
//     <div id="app" lang="en">
//       {/* JSX 주석 : Javascript 식 사용 (값!) */}
//       <h1>hello react!</h1>
//       <h2>Bye react..</h2>
//     </div>
//   );
// }
// 화살표 함수
const App = () => {
  return (
    <div id="app" lang="en">
      <h1>
        Hello React <span style={{ fontSize: 80 }}>⚛</span>
      </h1>
    </div>
  );
};

// arrow function
// const App = () => {};

createRoot(document.getElementById("root")).render(<App />);
