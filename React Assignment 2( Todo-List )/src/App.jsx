import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");

  const localData = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(localData);

  function changeInput(e) {
    setTodo(e.target.value);
  }

  function addTodos() {
    if (todo.trim() === "") {
      return alert("Add todo first");
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function deleteTodo(idx) {
    const copyTodos = [...todos];
    copyTodos.splice(idx, 1);
    setTodos(copyTodos);
    localStorage.setItem("todos", JSON.stringify(copyTodos));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
      <div className="w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/40 p-6 text-center">
        <h1 className="text-4xl font-semibold tracking-wide mb-6 text-white/90">
          Todo App
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none border border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/30 transition"
            type="text"
            placeholder="Enter Todo Here"
            value={todo}
            onChange={changeInput}
          />

          <button
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition"
            onClick={addTodos}
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {todos.map((elem, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition"
            >
              <h1 className="text-xl">{elem}</h1>

              <i
                className="ri-delete-bin-line text-red-400 hover:text-red-500 cursor-pointer transition"
                onClick={() => deleteTodo(idx)}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
