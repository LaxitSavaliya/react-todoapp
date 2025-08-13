
// Todo: Main component for displaying and managing tasks
import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import Buttons from "./Buttons";
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
                      <Buttons todo={todo} text={todo.complete ? 'Undo' : 'Done'} />
                      <Buttons todo={todo} text={"Delete"}/>
                      <Buttons todo={todo} text={"Edit"} />
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