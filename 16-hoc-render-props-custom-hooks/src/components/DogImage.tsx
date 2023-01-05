import React from 'react'
import withFrame from './withFrame'

interface Props {
 url: string;
}

function DogImage({url}: Props) {
  return (
    <img src={url} alt="dog" />
  )
}

export default withFrame(DogImage);


