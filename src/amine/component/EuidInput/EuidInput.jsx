import { useId, forwardRef, useImperativeHandle, useRef } from 'react';
import { A11yHidden } from '@/components';

function EuidInput(
  {
    as: ComponentName = 'div',
    name,
    type = 'text',
    label,
    placeholder,
    value,
    onChange,
    gap = 4,
    style: customStyle,
    hiddenLabel = false,
    inputProps = {},
    ...restProps
  },
  ref
) {
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      styling(cssRules) {
        inputRef.current.style.cssText = cssRules;
      },
    };
  });

  const inputRef = useRef(null);

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
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="focus:border-solid focus:border-indigo-500 focus:border-2"
        {...inputProps}
      />
    </ComponentName>
  );
}

export default forwardRef(EuidInput);
