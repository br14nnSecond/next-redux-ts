//utils
import { useAppSelector, useAppDispatch } from "@/utils/redux/hooks";
import {
  increment,
  decrement,
} from "@/utils/redux/features/counter/counterSlice";

export default function HomePage() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;

    id === "incrementBtn" ? dispatch(increment()) : dispatch(decrement());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-5xl font-semibold">Counter Value</h1>
      <h2 className="text-5xl font-semibold text-blue-500">{counter}</h2>
      <div className="flex flex-row gap-4">
        <button
          className="rounded bg-green-500 px-4 py-1"
          id="incrementBtn"
          onClick={handleClick}
        >
          Increment
        </button>
        <button
          className="rounded bg-red-500 px-4 py-1"
          id="decrementBtn"
          onClick={handleClick}
        >
          Decrement
        </button>
      </div>
    </main>
  );
}
