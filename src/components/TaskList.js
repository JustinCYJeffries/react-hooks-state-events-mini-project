import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const taskList = tasks.map(task=>(
    <Task category={task.category} text={task.text} key={task.text} handleDelete={handleDelete}/>
  ))
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;