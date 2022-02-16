import React, { useState, useEffect } from 'react';
import { listTasks } from '../utils/services';

function Tasks() {
  const [tasksList, setTasksList] = useState();
  console.log(tasksList);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await listTasks();
        setTasksList(data);
      console.log(data);
    }
    
   fetchData();
  }, []);

  return (
    <div>
      { tasksList && tasksList.map((task) => (
        <div key={task._id}>
          <p>{task.task}</p>
          <p>{task.date}</p>
          <p>{task.status}</p>
          <button type='submit'>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Tasks;
