'use client'

import React, { useState } from "react";


export default function Home() {

  const [count, setCount] = useState(0);

 
  const increment = () => {
    console.log("object")
    setCount(count + 1)

  }

  const decrement = () => {

    setCount(count - 1)

  }

 
  return (

    <div>

      <h1>this is state</h1>

      <h1>count: {count}</h1>

      <button onClick={increment}>increment</button><br />

      <button onClick={decrement}>decrement</button>

    </div>

  )

}

