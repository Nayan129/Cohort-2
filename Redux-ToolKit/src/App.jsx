import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.value);
  return (
    <div className="flex justify-center flex-col gap-2 m-14">
      <h1 className="font-bold text-4xl">{num}</h1>
      <div className="flex gap-2 font-medium">
        <button
          className="cursor-pointer text-xl border rounded-2xl px-2 py-1 outline-none bg-red-500 text-white active:scale-90"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          className="cursor-pointer text-xl border rounded-2xl px-2 py-1 outline-none bg-red-500 text-white active:scale-90"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
