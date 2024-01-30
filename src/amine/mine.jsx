import '../styles/main.css';
import '../styles/avoid-bomb.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// React.Component Type 1 :: class syntax

// const domElement = document.getElementById('root');

// if (domElement) {
//   const reactDomRoot = createRoot(domElement);
//   컴포넌트(component, class) => 인스턴스(instance, element, object)

//   클래스 구문
//   const app = React.createElement(App /* 컴포넌트 타입 */);

//   윗 구문을 JSX 구문으로 변경하면??
//    const app = <App />

//    함수 구문
//    const app = createApp();

//   reactDomRoot.render(app);
// }
