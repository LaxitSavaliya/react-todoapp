
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask, exitEditMode, deleteTask } from "../features/todo/todoSlice";

function UpDateTask({ todo }) {
  const [newEditTask, setNewEditTask] = useState(todo.task);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(exitEditMode(todo.id));
    setNewEditTask("");
  };

  const handleEditTask = () => {
    const cleanedTask = newEditTask.trim().replace(/\s+/g, " ");
    if (cleanedTask !== "") {
      dispatch(updateTask({ id: todo.id, newEditTask: cleanedTask }));
      setNewEditTask("");
    } else {
      if (window.confirm("Edit is empty. Do you want to delete this task?")) {
        dispatch(deleteTask(todo.id));
        setNewEditTask("");
      } else {
        handleCancel();
      }
    }
  };

  return (
    <div className="alltask updatetask-container">
      <div>
        <label htmlFor={`edit-task-${todo.id}`} className="updatetask-label"></label>
        <input
          id={`edit-task-${todo.id}`}
          className="inp updatetask-input"
          type="text"
          value={newEditTask}
          onChange={(e) => setNewEditTask(e.target.value)}
          autoFocus
          maxLength={50}
        />
      </div>
      <div className="btns updatetask-btns">
        <button
          onClick={handleEditTask}
          className="updatetask-btn"
        >
          Update
        </button>
        <button onClick={handleCancel} className="updatetask-btn cancel-btn">Cancel</button>
      </div>
    </div>
  );
}

export default UpDateTask;