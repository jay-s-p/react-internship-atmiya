import { useEffect, useState } from 'react'
import TodoTable from '../components/TodoTable'
import TodoInput from '../components/TodoInput'
import { Button, } from 'antd'


const TodoApp = () => {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || [])

  useEffect(() => {
    // save todoList to localStorage
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])


  const addTask = (x) => setTodoList([x, ...todoList])

  return (
    <>
      <h1>TODO APP in ReactJS</h1>
      <div style={{ height: "2em" }}></div>
      <TodoInput addTask={addTask} clearAll={()=>{setTodoList([])}} />
      <TodoTable data={todoList} setData={setTodoList} />
    </>
  );
};

export default TodoApp;