import { useState } from 'react';
import { reorderTasks } from '../data/reorderTasks';

function ReorderList() {
  const [tasks, setTasks] = useState(reorderTasks);

  const moveUp = (index) => {
    if (index === 0) return;

    setTasks(prev =>
      swapItems(prev, index, index - 1)
    );
  };

  const moveDown = (index) => {
    if (index === tasks.length - 1) return;

    setTasks(prev =>
      swapItems(prev, index, index + 1)
    );
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Reorder Task List</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={task.id} 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              padding: '10px',
              background: '#fff',
              borderRadius: '6px'
            }}
          >
            <span>
              <strong>{index + 1}.</strong> {task.text}
            </span>

            <span>
              <button
                onClick={() => moveUp(index)}
                disabled={index === 0}
              >
                
              </button>

              <button
                onClick={() => moveDown(index)}
                disabled={index === tasks.length - 1}
                style={{ marginLeft: '6px' }}
              >
                
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


function swapItems(arr, fromIndex, toIndex) {
  const newArr = [...arr];
  [newArr[fromIndex], newArr[toIndex]] =
    [newArr[toIndex], newArr[fromIndex]];
  return newArr;
}

export default ReorderList;
