import React, { useEffect, useState } from 'react'

export default function HelloWorld() {
  const [data, setData] = useState();

  const fetchData = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const obj = await resp.json();
  console.log(obj);
  setData(obj[0].body)
  }
  
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>hello-world {data}</div>
  )
}
