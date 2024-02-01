import { Stack } from './component';
import './38-stack-layout-component.module.css';

export default function Exercise() {
  return (
    <Stack vertical>
      <h2>Exercise</h2>
      <Stack gap>
        <p>아이템1</p>
        <p>아이템2</p>
        <p>아이템3</p>
      </Stack>
    </Stack>
  );
}
