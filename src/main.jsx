import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const createApp = (data) => {
  return (
    <form action="">
      <label htmlFor="serchKeyword" className="sr-only">
        검색
      </label>
      <input id="serchKeyword" type="serch" placeholder="검색" />
    </form>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(createApp(data));
