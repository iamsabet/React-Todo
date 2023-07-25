type TodoType = {
    id: string;
    task: string;
    date: Date;
    completed: boolean;
};

type TodoListType = {
    todos: TodoType[],
    toggle: Function,
    del: Function
}
type TodoItemType = {
    todoItem: TodoType,
    toggle: Function,
    del: Function
}
// could also use interface , extends for them