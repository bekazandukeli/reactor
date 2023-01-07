import React, { ComponentProps } from 'react';

type Props = ComponentProps<'input'> & { color: string };

function Input({ color, ...otherProps }: Props, ref: any) {
  return (
    <div style={{ borderColor: color, borderWidth: 1, borderStyle: 'solid' }}>
      <input ref={ref} {...otherProps} />
    </div>
  );
}

export default React.forwardRef(Input);
