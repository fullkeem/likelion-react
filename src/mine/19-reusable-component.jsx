import React from "react";
import { createRoot } from "react-dom/client";

// [학습 주제]
// 컴포넌트 재사용

// .formControl>label+input

function App() {
  return (
    <div id="app">
      <div className="formControl">
        <label htmlFor="username">이름</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="formControl">
        <label htmlFor="useremail">이메일</label>
        <input
          type="email"
          name="useremail"
          id="useremail"
          placeholder="user@company.io"
        />
      </div>
      <div className="formControl">
        <label htmlFor="username">이름</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="formControl">
        <label htmlFor="useremail">이메일</label>
        <input
          type="email"
          name="useremail"
          id="useremail"
          placeholder="user@company.io"
        />
      </div>
      <div className="formControl">
        <label htmlFor="useremail">이메일</label>
        <input
          type="email"
          name="useremail"
          id="useremail"
          placeholder="user@company.io"
        />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
