import React, { useRef } from 'react'

 function ChildComponent(props: {handleSomething: () => void}) {
  const renderCount = useRef(0);
  console.log('Child Render Count', ++renderCount.current);

  return (
    <div style={styles.container}>Child</div>
  )
}

export default React.memo(ChildComponent);

const styles = {
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'orange'
  }
}
