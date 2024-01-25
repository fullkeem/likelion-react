import { createRoot } from 'react-dom/client';
import FormControl from './component/FormControl';

// [학습 주제]
// 컴포넌트 재사용

// .formControl>label+input

function App() {
  return (
    <div id="app">
      <FormControl />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
