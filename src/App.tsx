import { useState } from "react";

type TodoType = {
  id: string;
  task: string;
  date: Date;
  completed: boolean;
};

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newItem.length > 0)
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            task: newItem,
            date: new Date(),
            completed: false,
          },
        ];
      });
    setNewItem("");
  };
  const toggleTodo = (id: string, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <div className="justify-center items-start pt-10 px-10 w-full h-auto flex flex-col">
        <form
          className="new-item-form h-auto w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-row flex flex-col h-16">
            <input
              type="text"
              value={newItem}
              placeholder="Enter new item ..."
              onChange={(e) => {
                setNewItem(e.target.value);
              }}
              className="form-input"
              id="item"
            />
          </div>
          <button className="add-btn" onClick={() => {}}>
            {" "}
            Add
          </button>
        </form>
        <hr className="bg-white w-full my-4 mx-auto rounded-lg" />
        <h1 className="header text-3xl font-semibold tracking-wider">
          Todo List
        </h1>
        <ul className="list">
          {todos.length === 0 && (
            <h6 className="text-lg font-semibold">No Todos</h6>
          )}
          {todos.map((item) => (
            <li className="list-item" key={item.id}>
              <label className="item-label">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) => toggleTodo(item.id, e.target.checked)}
                  className="checkbox checkbox-success"
                />
                <span className="item-text">{item.task}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(item.id)}
                >
                  Delete
                </button>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
