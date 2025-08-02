
// AddForm: Form for adding new tasks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../features/todo/todoSlice";

function AddForm() {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const taskText = newTask.trim().replace(/\s+/g, " ");
    if (taskText === "") {
      alert("Task cannot be empty!");
      setNewTask("");
      return;
    }
    dispatch(addNewTask(taskText));
    setNewTask("");
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit} className="addform-form">
        <label htmlFor="new-task" className="addform-label"></label>
        <input
          id="new-task"
          className="inp addform-input"
          type="text"
          placeholder="Write your task here..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          autoComplete="off"
          maxLength={50}
        />
        <button type="submit" className="addform-btn" disabled={!newTask.trim()}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddForm;