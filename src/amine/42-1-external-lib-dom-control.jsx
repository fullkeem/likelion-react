import { useTilt } from '@/hooks';
import { range } from '@/utils';
import { Tilt } from 'react-tilt';

function Exercise() {
  // 사이드 이펙트
  // DOM 접근/조작 (useRef)
  // 외부 라이브러리 연결 (useEffect)
  const boxRef = useTilt({
    onTilt(e) {
      console.log(e);
    },
  });

  return (
    <>
      <div className="flex gap-2 mb-10">
        <div
          ref={boxRef}
          className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg"
        >
          {'Vanilla Icecream'.toUpperCase()}
        </div>
        <div className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg">
          {'Vanilla Icecream'.toUpperCase()}
        </div>
        <div className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg">
          {'Vanilla Icecream'.toUpperCase()}
        </div>
        <div className="flex justify-center items-center w-[200px] h-[200px] bg-gray-900 text-gray-50 rounded-lg">
          {'Vanilla Icecream'.toUpperCase()}
        </div>
      </div>
    </>
  );
}

export default Exercise;
