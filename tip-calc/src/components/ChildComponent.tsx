import React from 'react'

export default function ChildComponent() {
  return (
    <div style={styles.container}>Child</div>
  )
}

const styles = {
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'orange'
  }
}
