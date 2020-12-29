import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => count < 10 ? setCount(count + 1) : count
    const decrement = () => count > 0 ? setCount(count - 1) : 0
  
    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;

