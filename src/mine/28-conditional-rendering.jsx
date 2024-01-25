export default function Exercise() {
  // 로그인 여부 (상태 변수, 랜덤 값)
  let isSignin = false; //Math.random() >= 0.5;

  let markup = <></>;

  if (isSignin) {
    markup = <div>대시보드 페이지 표시</div>;
  } else {
    markup = <div>로그인 페이지 표시</div>;
  }
}
