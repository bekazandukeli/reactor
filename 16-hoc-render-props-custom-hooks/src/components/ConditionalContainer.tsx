import React from 'react'

interface Props {
  children: JSX.Element;
  visible: boolean;
}

export default function ConditionalContainer(props: Props) {
  if(!props.visible) {
    return props.children;
  }
  return (
    <div style={{border: '10px dashed blue'}}>
      {props.children}
    </div>
  )
}
