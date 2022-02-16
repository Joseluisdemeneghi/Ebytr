import React, { useState, useEffect } from 'react';
import { listTasks, createTask, deleteTask } from '../utils/services';

function Tasks() {
  const [tasksList, setTasksList] = useState();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('pendente');
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await listTasks();
      setTasksList(data);
    }
    
   fetchData();
  }, []);

  function handleTask(event) {
    setTask(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleStatus(event) {
    setStatus(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await createTask({ task, date, status })
    setTask('');
    setDate('');
    setStatus('pendente');
    const { data } = await listTasks();
    setTasksList(data);
  }

  async function handleDelete(taskId) {
    await deleteTask(taskId);
    const { data } = await listTasks();
    setTasksList(data);
  }

  return (
    <div>
      <div>
        <input type="text" value={task} onChange={handleTask} placeholder="Tarefa" />
        <input type="text" value={date} onChange={handleDate} placeholder="Data" />
        <select name="status" id="status" value={status} onChange={handleStatus}>
          <option value="pendente">pendente</option>
          <option value="em andamento">em andamento</option>
          <option value="pronto">pronto</option>
        </select>
        <button type='submit' onClick={handleSubmit}>Nova Tarefa</button>
      </div>
      { tasksList && tasksList.map((task) => (
        <div key={task._id}>
          <p>{task.task}</p>
          <p>{task.date}</p>
          <p>{task.status}</p>
          <button type='submit' onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Tasks;
