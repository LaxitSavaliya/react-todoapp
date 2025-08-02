
// Todo: Main component for displaying and managing tasks
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import DoneTask from "./DoneTask";
import UpDateTask from "./UpDateTask";
import AllComplete from "./AllComplete";

function Todo() {
  // Get todos from Redux store
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-container">
      <AddForm />
      <div>
        <hr />
        <h2>Your Tasks</h2>
      </div>
      <div>
        <ol className="task-list">
          {todos.length === 0 ? (
            <li className="no-tasks">No tasks yet. Add your first task!</li>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className="task-item">
                {todo.edit ? (
                  <UpDateTask todo={todo} />
                ) : (
                  <div className='alltask'>
                    <div className={todo.complete ? 'complete' : ''}>
                      {todo.task}
                    </div>
                    <div className='btns'>
                      <DoneTask todo={todo} />
                      <DeleteTask id={todo.id} />
                      <EditTask id={todo.id} />
                    </div>
                  </div>
                )}
              </li>
            ))
          )}
        </ol>
      </div>
      <AllComplete todos={todos} />
    </div>
  );
}

export default Todo;