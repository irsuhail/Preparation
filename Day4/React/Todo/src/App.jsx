import { useState } from 'react';
import { initialTodos } from './data/initialTodos';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List with Priorities</h2>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
