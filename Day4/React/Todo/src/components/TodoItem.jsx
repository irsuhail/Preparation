const priorityColors = {
  High: 'red',
  Medium: 'orange',
  Low: 'green'
};

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      <span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {' '}
        {todo.text}
        {' '}
        <span
          style={{
            color: 'white',
            backgroundColor: priorityColors[todo.priority],
            padding: '2px 8px',
            borderRadius: '8px',
            marginLeft: '10px',
            fontSize: '12px'
          }}
        >
          {todo.priority}
        </span>
      </span>

      <button onClick={() => onDelete(todo.id)}></button>
    </li>
  );
}

export default TodoItem;
