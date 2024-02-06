import { Stack } from '@/amine/component';
import { useInOnScreen } from '@/hooks';

function Exercise() {
  const [isOnScreen, elementRef] = useInOnScreen();

  return (
    <section className="w-full my-5">
      <header className="fixed bottom-0 left-0 w-full p-5 text-indigo-900 bg-white/70 backdrop-blur-sm">
        <p>
          INTERSECTION →{' '}
          <b className="font-extrabold">{isOnScreen ? 'IN' : 'OUT'}</b>
        </p>
      </header>
      <h2 className="my-5">
        Intersection Observer{' '}
        <abbr title="Application Programming Interface">API</abbr>
      </h2>

      <Stack vertical gap={16}>
        {['black', 'indigo', 'orange', 'emerald'].map((color) => {
          return (
            <Box key={color} color={color}>
              Intersection U
            </Box>
          );
        })}

        <Box color="indigo">Intersection P</Box>

        {/* <Box color="emerald">Intersection L</Box> */}
        <article
          ref={elementRef}
          className={`h-[90vh] w-[100%] p-5 bg-emerald-800 text-white rounded-lg`}
        >
          <h3 className="text-2xl uppercase">intersection Y</h3>
        </article>

        <Box color="orange">Intersection Z</Box>
      </Stack>
    </section>
  );
}

function Box({ color, children }) {
  let bgColor = '';
  switch (color) {
    case 'orange':
      bgColor = 'bg-orange-800';
      break;
    case 'emerald':
      bgColor = 'bg-emerald-800';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-800';
      break;
    default:
      bgColor = 'bg-black';
  }
  return (
    <article
      className={`h-[90vh] w-[100%] p-5 ${bgColor} text-white rounded-lg`}
    >
      <h3 className="text-2xl uppercase">{children}</h3>
    </article>
  );
}

export default Exercise;
