import './Counter.css';
import { useState } from 'react';

function Counter() {
  const [amount, setAmount] = useState(0);

  const increment = () => {
    if (amount < 10) {
      setAmount(amount + 1)
    }
  };

  const decrement = () => {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  };

  const resetCounter = () => {
    setAmount(0);
  }

  return (
    <div className="counter-container">
      <div className='counter'>
        <div >
          <button className='ac-button' disabled={amount === 0} onClick={() => resetCounter()}>AC</button>
          <h1 className='title-amout'>{amount}</h1>
        </div>
        <div className='action-buttons'>
          <button className='action-button' disabled={amount === 0} onClick={() => decrement()}>-</button>
          <button className='action-button' disabled={amount > 9} onClick={() => increment()}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
