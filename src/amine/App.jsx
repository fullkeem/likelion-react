import { app as appclassName } from './App.module.css';
import Exercise from '@/amine/42-1-external-lib-dom-control';

export default function App() {
  return (
    <div className={appclassName}>
      <Exercise />
    </div>
  );
}
