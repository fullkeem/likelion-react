import { useState } from 'react';
import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';

function CatsList() {
  const [cats, setCats] = useState(catsData);

  const handleDeleteCat = (deleteCatId) => {
    console.log(deleteCatId);
    // [1] 새로운 값 설정
    // setCats();
    setCats(cats.filter((cat) => cat.id !== deleteCatId));

    // [2] 콜백 함수 : 이전 값을 연산해서 반환한 값 설정
    // setCats((cats) => cats.filter((cat) => !cat.birthday.includes('1974')));
  };

  return (
    <ul
      style={{
        listStyle: 'none',
        paddingInlineStart: 0,
        marginBlock: 0,
      }}
    >
      {cats.map((cat) => (
        <li key={cat.id}>
          <img
            src={getStaticImage(cat.imageSrc)}
            alt={cat.imageAlt}
            height={100}
          />
          <button
            type="button"
            aria-label="삭제"
            title="삭제"
            onClick={() => handleDeleteCat(cat.id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function Exercise() {
  return (
    <div>
      <h2>객체형 상태 관리</h2>
      <CatsList></CatsList>
    </div>
  );
}
