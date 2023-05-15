import React from "react";
import ToDo from "./components/ToDo";
import { useEffect, useState } from "react";
import { get_Todo_list, add_new_Todo, update_Todo, delete_Todo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    get_Todo_list(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>To-Do List</h1>

          <div className="top">
            <input
              type="text"
              placeholder="Write To-Do Here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          
          <div
              className="add"
              onClick={isUpdating ?
                () => update_Todo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => add_new_Todo(text, setText, setToDo)}>
              {isUpdating ? "Update" : "Add"}
          </div>
            
        </div>
        
        

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          delete_Todo = {() => delete_Todo(item._id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;