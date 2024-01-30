import { Fragment } from 'react';
import classes from './33-avoid-bomb.module.css';

console.log(classes);

export default function Exercise() {
  return (
    <Fragment>
      <a
        href="/"
        className="back__link"
        aria-label="이전 페이지로 이동"
        style={{ backgroundColor: 'transparent' }}
      >
        ←
      </a>
      <div id="root">
        <div className={classes.game}>
          <button className={classes.ball} aria-label="공(ball)" />
          <button className={classes.bomb} aria-label="폭탄(bomb)">
            <span role="img">💣</span>
          </button>
        </div>
        <div className={classes.gameControls} role="group">
          <button type="button" aria-label="게임 시작" disabled>
            start
          </button>
          <button type="button" aria-label="게임 일시정지">
            pause
          </button>
        </div>
      </div>
    </Fragment>
  );
}
