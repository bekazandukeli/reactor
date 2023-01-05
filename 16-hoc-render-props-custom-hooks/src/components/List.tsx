import React from 'react'

interface Props {
  data: any[];
  renderProps: (item?: any) => JSX.Element;
}

export default function List(props: Props) {
  const {data, renderProps} = props;
  return (
    <ul>
      {data.map(renderProps)}
    </ul>
  )
}
