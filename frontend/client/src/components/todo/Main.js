import React, { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const onChangeHandler = (e) => {
    setTodoValue(e.target.value);
  };

  const onClickHandler = (e) => {
    setTodoList([...todoList, todoValue]);
    setTodoValue("");
  };

  return (
    <div className="todoApp">
      <div className="container" style={{ padding: "20px" }}>
        <center>
          <div
            className="card"
            style={{
              padding: "10px",
              maxWidth: "400px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <h3>My To do List</h3>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                value={todoValue}
                onChange={onChangeHandler}
                placeholder="My new task"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-success"
                onClick={onClickHandler}
                type="button"
                id="button-addon2"
              >
                Add <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            {todoList.map((element) => {
              return (<div><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label style={{display: "inline", width: "60px"}}>{element}</label></div>)
            })}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Todo;
