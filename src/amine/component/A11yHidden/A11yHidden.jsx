function A11yHidden({ as: ComponentName = 'div', children }) {
  return <ComponentName style={styles}>{children}</ComponentName>;
}

// CSS in JS 도구
// styled-components
// emotion

const styles = {
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'circle(0)',
  width: 1,
  height: 1,
  margin: '-1px',
  padding: 0,
  border: 0,
  whiteSpace: 'nowrap',
};

export default A11yHidden;
