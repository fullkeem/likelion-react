import classes from './Stack.module.css';

export default function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  style: customStyles,
  vertical = false,
  gap = null,
  mx: marginInline = 0,
  my: marginBlock = 0,
  ...restProps /* {children} */
}) {
  const componentClassNames = `${classes.stack} ${customClassNames}`.trim();

  const componentStyles = {
    '--direction': vertical ? 'column' : 'row',
    '--gap': gap ? `${gap}px` : '10px',
    '--marginInline': marginInline ? `${marginInline}px` : '0px',
    '--marginBlock': marginBlock ? `${marginBlock}px` : '0px',
    ...customStyles,
  };

  return (
    <Component
      className={componentClassNames}
      style={componentStyles}
      {...restProps}
    />
  );
}
