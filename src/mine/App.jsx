import Widget from './21-widget-component';

export default function App() {
  return (
    <div className="app">
      <Widget
        temperature={-0.9}
        summary="어제보다 1.3 낮아요"
        location="Seoul"
      />
      <Widget
        temperature={-0.7}
        summary="어제보다 1.3 낮아요"
        location="Tokyo"
      />
    </div>
  );
}
