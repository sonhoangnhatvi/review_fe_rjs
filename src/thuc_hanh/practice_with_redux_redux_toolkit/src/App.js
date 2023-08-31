import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { countAction } from "./store";

function App() {
  const count = useSelector((state) => state.count.count);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(countAction.increment());
  };

  const decrementHandler = () => {
    dispatch(countAction.decrement());
  };

  return (
    <div className="App">
      <h1>Render</h1>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;
