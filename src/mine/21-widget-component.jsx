import Button from './exercises/01-widget/Button';
import WidgetBox from './exercises/01-widget/WidgetBox';

const Widget = () => {
  return (
    <>
      <WidgetBox
        className={'weather__info--template'}
        type={'sunny'}
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="서울"
      />
      <Button loading>저장</Button>
      <WidgetBox
        className={'weather__info--fineDust'}
        type={'FineDust'}
        temperature={'11 좋음'}
        summary="미세먼지"
        location="도쿄"
      />
      <Button disabled>취소</Button>
    </>
  );
};
export default Widget;
