import React, { useState } from "react";
import "./ToDoListMain.css";
import ToDoListElement from "./ToDoListElement";
function ToDoListMain() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>toDo List</h1>
          <br />
          <div className="line_input">
            <input
              id="input_id"
              type="text"
              value={inputList}
              placeholder="Add a Items"
              onChange={itemEvent}
            />
            <button onClick={addItem}>
              <span> + </span>
            </button>
          </div>
          <ol>
            {/* <li>{inputList}</li> */}

            {Items.map((itemval, index) => {
              return (
                <ToDoListElement
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDoListMain;
