import { useId } from 'react';
import { A11yHidden } from '..';

function FormInput({
  as: ComponentName = 'div',
  type = 'text',
  label,
  name,
  placeholder,
  value,
  onChange,
  gap = 4,
  style: customStyle,
  hiddenLabel = false,
  inputProps,
  ...restProps
}) {
  const id = useId();

  let labelElement = <label htmlFor={id}>{label}</label>;

  if (hiddenLabel) {
    labelElement = (
      <A11yHidden as="label" htmlFor={id}>
        {label}
      </A11yHidden>
    );
  }

  return (
    <ComponentName
      style={{
        display: 'flex',
        gap,
        ...customStyle,
      }}
      {...restProps}
    >
      {labelElement}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </ComponentName>
  );
}

export default FormInput;
