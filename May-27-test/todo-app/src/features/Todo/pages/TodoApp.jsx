import { useState } from 'react'
import TodoTable from '../components/TodoTable'
import TodoInput from '../components/TodoInput'
import { Button } from 'antd'


const TodoApp = () => {

  const [todoList, setTodoList] = useState([
    {
      "key": 1,
      "title": "delectus aut autem",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?",
      "completed": false,
    },
    {
      "key": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false,
    }
  ])

  const addTask = (x) => setTodoList([...todoList, x])

  return (
    <>
      <h1>TODO APP in ReactJS</h1>
      <div style={{height:"2em"}}></div>
      <TodoInput addTask={addTask} />
      <TodoTable data={todoList} setData={setTodoList} />
    </>
  );
};

export default TodoApp;