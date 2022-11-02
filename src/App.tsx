import './App.css'
import Form from './components/Form';
import Todo from './components/Todo';
import { useTodoReducer } from './reducer/useTodos';

function App() {

  const [todos, dispatch] = useTodoReducer();

  const createTodo = (newTodoText: string) => {
    dispatch({
      type: "add",
      payload: { text: newTodoText }
    })
  }

  const deleteTodo = (id: string) => dispatch({
    type: "delete",
    payload: { id }
  })

  return (
    <div className="App">
      <h2>Todo List -  TS</h2>
      <Form createTodo={createTodo} />
      <Todo todoList={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
