import React, { useState } from 'react';
import './App.css';

const Todo = (props) => {
  const { todo, index, completeTodo, deleteTodo } = props;
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      { todo.text }
      <duv>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </duv>
    </div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [ value, setValue ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add Todo..." onChange={ e => setValue(e.target.value) } />
    </form>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'LEarn about react',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div classNAme="app">
      <div className="todolist">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
