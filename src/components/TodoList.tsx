import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggle, del }: TodoListType) => {
  const toggleTodo = (id: string, completed: boolean) => {
    toggle(id, completed);
  };
  const deleteTodo = (id: string) => {
    del(id);
  };

  return (
    <ul className="list">
      {todos.length === 0 && (
        <h6 className="text-lg font-semibold">No Todos</h6>
      )}
      {todos.map((item) => (
        <TodoItem
          todoItem={item}
          toggle={toggleTodo}
          del={deleteTodo}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
