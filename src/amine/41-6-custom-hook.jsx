import { useStorage } from '@/hooks';

const KEY = 'to-choongman';

export default function Exercise() {
  // 1. 컴포넌트 로직 => 훅 함수 분리
  const [message, setMessage] = useStorage(KEY, '커스텀 훅 너 이 짜식');

  const handleUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="m-5">
      <input
        type="text"
        name=""
        id=""
        aria-label="오늘 기억하고 싶은 말"
        placeholder="오늘 기억하고 싶을 말"
        value={message}
        onChange={handleUpdate}
      />

      <p className="my-2">{message}</p>
    </div>
  );
}
