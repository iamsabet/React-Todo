import { useState } from "react";

type onSubmitType = {
  onSubmit: Function;
};

const NewTodoForm = ({ onSubmit }: onSubmitType) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newItem.length === 0) return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
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
  );
};

export default NewTodoForm;
