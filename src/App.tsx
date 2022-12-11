import reactLogo from "./assets/react.svg";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./store";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./store/slices";

function App() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>count is {counter}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          <span>Increment</span>
        </button>
        <button onClick={() => dispatch(decrement())}>
          <span>Decrement</span>
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          <span>Increment by 2</span>
        </button>
      </div>
    </div>
  );
}

export default App;
