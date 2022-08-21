import React, { useState } from "react";
import axios from "axios"

const App = () => {
  const [todo, setTodo] = useState([]);

  const getAPIData = async () => {
    try {
      await axios.get('http://localhost:8080/api/').then((res) => {
        console.log(res?.data)
        const tododata = res?.data
        setTodo(tododata)
      })
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <p>hello world!!</p>
      <button onClick={getAPIData}>クリック</button>
      {todo.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  )
}

export default App;
