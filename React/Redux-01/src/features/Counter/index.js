import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectTick,
  incrementByAmount,
  incrementByAmountAsync,
} from "../tickSlice";
import { useState } from "react";

export default function Counter() {
  const [amount, setAmount] = useState(0);
  const value = useSelector(selectTick);
  const dispatch = useDispatch();

  return (
    <>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span className="text">{value}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <input value={amount} onChange={e => setAmount(e.target.value)} />
      <button
        onClick={() => dispatch(incrementByAmount({ val: parseInt(amount) }))}
      >
        Increment By Amount
      </button>
      <button
        onClick={() =>
          dispatch(incrementByAmountAsync({ val: parseInt(amount) }))
        }
      >
        Increment By Amount Async
      </button>
    </>
  );
}
