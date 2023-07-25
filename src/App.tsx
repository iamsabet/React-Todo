import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import { themeChange } from "theme-change";
import { BsMoon, BsSun } from "react-icons/bs";
function App() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const local = localStorage.getItem("todos");
    if (!local) return [];
    return JSON.parse(local);
  });

  // we cant render hooks conditionaly
  useEffect(() => {
    // run everytime todos
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    themeChange(false);
  }, []);
  const addToDo = (title: string) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          task: title,
          date: new Date(),
          completed: false,
        },
      ];
    });
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
      <ThemeButton />
      <div className="justify-center items-center pt-4 px-10 w-full h-auto flex flex-col">
        <h1 className="header text-4xl mb-0 mx-7 font-bold tracking-wider link-success text-center first-letter:text-accent">
          React + Tailwind
        </h1>
        <h1 className="header text-4xl mb-3 mx-7 font-bold tracking-wider link-success text-center first-letter:text-accent">
          Todo List App
        </h1>
        <NewTodoForm onSubmit={addToDo} />
        <hr className="bg-white w-9/12 mt-6 mb-2 mx-auto rounded-lg" />
        <h2 className="header w-full text-3xl font-semibold tracking-wider text-center">
          Todo List
        </h2>
        <TodoList todos={todos} toggle={toggleTodo} del={deleteTodo} />
      </div>
    </>
  );
}

const ThemeButton = () => {
  const [themeState, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) return false;
    if (theme === "light") return true;
    else return false;
  });
  return (
    <button
      className="theme-button"
      data-toggle-theme="night,light"
      data-act-class="ACTIVECLASS"
      onClick={() => {
        setTheme(!themeState);
      }}
    >
      {themeState ? (
        <BsMoon size="28" className="theme-icon" />
      ) : (
        <BsSun size="28" className="theme-icon" />
      )}
    </button>
  );
};

export default App;
