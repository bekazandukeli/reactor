import React, { ReactNode } from 'react'

interface Props {
  
}

export default function withFrame(Component: (props: any) => JSX.Element) {
  return (props: any) => (
    <div 
      style={{borderWidth: 10, borderColor: 'red', borderStyle: "dotted"}}
    >
      <Component {...props} />
    </div>
  );
}
