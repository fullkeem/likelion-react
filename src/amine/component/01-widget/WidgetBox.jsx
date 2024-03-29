import WeatherIcon from './WeatherIcon';
import './WidgetBox.css';

const WidgetBox = (props) => {
  return (
    <article className="widget widget__weather">
      <h2 className="sr-only">{props.location} 날씨</h2>
      <WeatherIcon type={props.type} />
      <div className="weather__info" role="group">
        <span className={props.className}>{props.temperature}</span>
        <span className="weather__info--description">{props.summary}</span>
      </div>
    </article>
  );
};

export default WidgetBox;
