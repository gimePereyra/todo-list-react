import './App.css';
import TodoList from './components/TodoList.jsx'
import { FcTodoList } from 'react-icons/fc'

function App() {
  return (
    <>
    <h1 className="title">Lista de tareas <FcTodoList className="icoFc"/></h1>
      <div className="todo-app">
          <TodoList />
      </div>
    </>
  );
}

export default App;
