import { range } from '@/utils';
import { string, node } from 'prop-types';
import { SkipToContent } from '@/components';

function SkipToContentPage() {
  return (
    <>
      <h2 className="my-5">메인 영역으로 바로가기</h2>
      <nav aria-label="특정 영역 이동 링크" className="my-5 text-xs">
        <SkipToContent href="#section-900">섹션 900으로 이동</SkipToContent>
      </nav>
      <div className="flex flex-col space-y-0.5 border-2 border-slate-300">
        {range(100, 900, 100)
          .map((n) => ({
            // color: `bg-slate-${n}`,
            id: n,
          }))
          .map(({ id: n }) => {
            return (
              <Section
                key={n}
                id={`section-${n}`}
                headline={`섹션 헤드라인 #${n}`}
                // color={color}
              />
            );
          })}
      </div>
    </>
  );
}

function Section({ id, headline, color = 'bg-slate-950', children }) {
  return (
    <section className={`h-[50vh] ${color} text-slate-300 p-5`}>
      <h3 id={id}>{headline}</h3>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  color: string,
  children: node,
};

export default SkipToContentPage;
