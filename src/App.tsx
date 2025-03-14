import React, { useState } from "react";
import InputField from "./components/InputField";
import Todo from "./components/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
    console.log(todos);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
    </>
  );
};

export default App;
