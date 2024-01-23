import './Button.css';

// props: {disabled, mode, type, state, ...}

export default function Button(props) {
  return (
    <button
      type={props.type ?? 'button'}
      className="Button"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
