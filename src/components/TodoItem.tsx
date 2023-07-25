const TodoItem = ({ todoItem, toggle, del }: TodoItemType) => {
  var d = new Date(todoItem.date),
    dformat =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

  return (
    <li className="list-item" key={todoItem.id}>
      <label className="item-label">
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={(e) => toggle(todoItem.id, e.target.checked)}
          className="checkbox checkbox-success"
        />
        <p className="item-text">
          <span className="">{todoItem.task}</span>
          <br />
          <span className="opacity-80 text-sm">{dformat}</span>
        </p>
        <button className="delete-button" onClick={() => del(todoItem.id)}>
          Delete
        </button>
      </label>
    </li>
  );
};

export default TodoItem;
