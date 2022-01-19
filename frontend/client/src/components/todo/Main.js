import React, { useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const onChangeHandler = (e) => {
    setTodoValue(e.target.value);
  };

  const onCheckHandler = (index) => {
    let newTodoList = [...todoList];
    newTodoList[index][1] = !newTodoList[index][1];
    const trueList = [];
    const falseList = [];
    for (let i = 0; i < newTodoList.length; i++) {
      if (newTodoList[i][1] == 1) {
        trueList.push(newTodoList[i]);
      } else if (newTodoList[i][1] == 0) {
        falseList.push(newTodoList[i]);
      }
    }
    newTodoList = [...trueList, ["", -1], ... falseList];
    setTodoList(newTodoList);
  };

  const onClickHandler = (e) => {
    setTodoList([[todoValue, true], ...todoList]);
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
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={todoValue}
                onChange={onChangeHandler}
                placeholder="My new task"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success"
                onClick={onClickHandler}
                type="button"
                id="button-addon2"
              >
                Add <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            {todoList.map((element, index) => {
              return (
                <div>
                {element[1] == -1 ? <div style={{width: "100%", height: "2px", "backgroundColor": "#333", marginBottom: "10px"}} /> 
                :<div className="input-group mb-3" key={index} >
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      onChange={(e) => {
                        onCheckHandler(index);
                      }}
                      type="checkbox"
                      value=""
                      checked={!element[1]}
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                  {element[1] ? (
                    <input
                      type="text"
                      readOnly={true}
                      value={element[0]}
                      className="form-control"
                      aria-label="Text input with checkbox"
                    />
                  ) : (
                    <input
                      type="text"
                      readOnly={true}
                      style={{ textDecoration: "line-through", color: "#999" }}
                      value={element[0]}
                      className="form-control"
                      aria-label="Text input with checkbox"
                    />
                  )}
                </div>}
                </div>
              );
            })}
          </div>
        </center>
      </div>
    </div>
  );
}

export default Todo;
