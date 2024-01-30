import './WeatherIcon.css';

// props { type: '맑고 구름 조금' | '맑음' | '천둥' | '비' | '미세먼지' }

function WeatherIcon(props) {
  const label = props.type;
  const imageSource = `/assets/WeatherIcon/${label}.svg`;

  return <img src={imageSource} alt={label} title={label} />;
}

export default WeatherIcon;
