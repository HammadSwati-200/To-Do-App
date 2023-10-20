import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [ListToDo, setListToDo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") {
      setListToDo([...ListToDo, inputText]);
    } else {
      alert("please enter something to show");
    }
  };

  const deleteListItems = (key) => {
    const newListTodo = [...ListToDo];
    newListTodo.splice(key, 1);
    setListToDo(newListTodo);
  };

  return (
    <div className="container p-5 mt-5">
      <Input addList={addList} />
      {ListToDo.map((listItem, i) => {
        return (
          <List
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItems}
          />
        );
      })}
    </div>
  );
}

export default App;
