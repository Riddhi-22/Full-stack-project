import React, { useState } from "react";
import TimePicker from "./timePicker";

function TimeManagement() {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [newTask, setNewTask] = useState("");
  const [list, setList] = useState([]);

  const onClickHandler = () => {
    const data = [startTime, endTime, newTask];
    setList([...list, data]);
    setStartTime("00:00");
    setEndTime("00:00");
    setNewTask("");
  };

  const onCheckHandler = (index) => {
    const newList=[];
    for(let i=0;i<index && i<list.length;i++)
    {
      newList.push(list[i]);
    }
    for(let i=index+1;i<list.length;i++)
    {
      newList.push(list[i]);
    }
    setList(newList);
  };

  return (
    <div className="timemanagement">
      <div className="container">
        <center>
          <div
            className="card"
            style={{
              padding: "20px",
              maxWidth: "550px",
              marginTop: "3%",
              boxShadow: "2px 2px 10px rgba(0.3, 0.3, 0.3, 0.3)",
              backgroundColor: "#eeeeee",
              marginBottom: "3%"
            }}
          >
            <h4 style={{ paddingBottom: "10px" }}>Time Tree</h4>
            <div
              className="form-group"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              <TimePicker
                onChange={(e) => {
                  setStartTime(e.target.value);
                }}
                time={startTime}
                label={"Start Time"}
              />
              <TimePicker
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
                time={endTime}
                label={"End Time"}
                // style = {{
                //   marginRight: "5px",
                //   marginTop: "50px"
                // }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Add new task"
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
                value={newTask}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClickHandler}
              >
                <i className="fas fa-plus-circle"></i>
              </button>
            </div>
            {list.map((ele, index) => {
              return (
                <div className="container">
                  <div
                    className="row"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(e) => {
                          onCheckHandler(index);
                        }}
                        checked={false}
                      />
                      <label className="form-check-label" for="flexCheckDefault" style={{display:"flex", flexDirection:"row"}}>
                        <div className="col-sm">
                          <p style={{ display: "inline", fontWeight: "bold" }}>
                            FROM:{" "}
                          </p>
                          {ele[0]}
                        </div>
                        <div className="col-sm">
                          <p style={{ display: "inline", fontWeight: "bold" }}>
                            TO:{" "}
                          </p>
                          {ele[1]}
                        </div>
                        <div className="col-sm">
                          <p style={{ display: "inline", fontWeight: "bold" }}>
                            TASK:{" "}
                          </p>
                          {ele[2]}
                        </div>
                      </label>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        </center>
      </div>
    </div>
  );
}

export default TimeManagement;
