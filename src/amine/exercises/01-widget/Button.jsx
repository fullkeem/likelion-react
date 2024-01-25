import './Button.css';

// props: {disabled, mode, type, state, ...}

export default function Button(props) {
  let buttonLabel = props.children;
  if (props.children) {
    buttonLabel = ""
  }

  return (
    <button
      type={props.type ?? 'button'}
      className="Button"
      disabled={props.disabled}
    >
      {buttonLabel}
    </button>
  );
}
