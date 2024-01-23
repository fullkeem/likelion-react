import WidgetBox from './exercises/01-widget/WidgetBox';

const Widget = () => {
  return (
    <>
      <WidgetBox
        type={'FineDust'}
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="서울"
      />
      <WidgetBox
        type={'rainy'}
        temperature={-0.7}
        summary="어제보다 1.5° 낮아요"
        location="도쿄"
      />
    </>
  );
};

export default Widget;
