import React, { useState } from "react";

const TodoList = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [newItem, setNewItems] = useState("");

  const handleAddItem = () => {
    if (newItem) {
      setToDoItems([...toDoItems, newItem]);
      setNewItems("");
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleDeleteItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div col-md-8>
          <h2 className="text-center mb-4"></h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new item"
              value={newItem}
              onChange={(e) => setNewItems(e.target.value)}
              onKeyDown={handleKeypress}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleAddItem}
              >
                Add
              </button>
            </div>
          </div>
          <ul className="list-group">
            {toDoItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item}
                <button
                  className="btn btn-danger btn-sm mx-5"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
