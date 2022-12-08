import React, { useRef } from 'react'

 function ChildComponent(props: {count: number}) {
  const renderCount = useRef(0);
  console.log('Child Render Count', ++renderCount.current);

  return (
    <div style={styles.container}>Child count {props.count}</div>
  )
}

export default React.memo(ChildComponent, (prevProps, nextProps) => {
  if (prevProps.count === nextProps.count) {
    return true;
  }
  return false;
});

const styles = {
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'orange'
  }
}
