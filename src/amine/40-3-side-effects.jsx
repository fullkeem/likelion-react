import { A11yHidden, Stack } from '@/amine/component';
import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_PB_API;

async function fetchProducts(options) {
  try {
    const response = await fetch(
      `${API}/api/collections/products/records`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}

function Exercise() {
  const [isLoading, setIsLoading] = useState('');
  const [tableContents, setTableContents] = useState([]);

  // 1번만 요청
  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({ signal: controller.signal }).then((data) =>
      setTableContents(data?.items)
    );

    // 신호를 통해 중복된 요청일 경우 웹 요청을 취소(abort)
    // 클린업
    return () => {
      // 네트워크 요청 취소
      controller.abort();
    };
  }, []);

  const tableContentsLegnth = tableContents?.length;

  return (
    <div>
      <h2 className="text-2xl text-indigo-500 mt-7">Exercise</h2>

      <DataTable contents={tableContents} />
      <DataTableItemCount count={tableContentsLegnth} />
    </div>
  );
}

function CountUpDown() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((c) => c + 1);
  };

  const handleDec = () => {
    setCount((c) => c - 1);
  };

  const buttonStyle = 'px-4 py-1 bg-sky-800 text-white rounded-md';

  return (
    <Stack gap={6}>
      <button
        className={buttonStyle}
        type="button"
        onClick={handleDec}
        aria-label="1 감소"
      >
        -
      </button>
      <output className="text-2xl font-bold">{count}</output>
      <button
        className={buttonStyle}
        type="button"
        onClick={handleInc}
        aria-label="1 증가"
      >
        +
      </button>
    </Stack>
  );
}

function DataTable({ contents }) {
  const tableStyle = 'mt-2 border-2 border-solid border-indigo-600';
  const borderStyle = 'p-2 border border-solid border-indigo-300';

  return (
    <table className={tableStyle}>
      <A11yHidden as="caption">표 제목</A11yHidden>
      <thead>
        <tr>
          <th scope="col" className={borderStyle}>
            ID
          </th>
          <th scope="col" className={borderStyle}>
            BRAND
          </th>
          <th scope="col" className={borderStyle}>
            NAME
          </th>
        </tr>
      </thead>
      <tbody>
        {contents &&
          contents.map((content) => (
            <tr key={content.id}>
              <td className={borderStyle}>{content.id}</td>
              <td className={borderStyle}>{content.brand}</td>
              <td className={borderStyle}>{content.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function DataTableItemCount({ count }) {
  return (
    <output className="block px-2 py-1 mt-2 border border-solid rounded border-sky-600">
      {count}
    </output>
  );
}

export default Exercise;
