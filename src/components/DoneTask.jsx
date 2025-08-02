import { toggleComplete } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function DoneTask({ todo }) {
    const dispatch = useDispatch();

    let handleToggle = () => {
        dispatch(toggleComplete(todo.id));
    }

    return (
        <button onClick={handleToggle}>
            {todo.complete ? 'Undo' : 'Done'}
        </button>
    )
}

export default DoneTask