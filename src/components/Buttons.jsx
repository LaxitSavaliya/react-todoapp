import { startEditTask, toggleComplete, deleteTask } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function Buttons({ todo, text }) {
    const dispatch = useDispatch();

    let handleClick = () => {
        if (text === 'Edit') {
            dispatch(startEditTask(todo.id));
        } else if(text === 'Undo' || text == 'Done') {
            dispatch(toggleComplete(todo.id));
        } else if (text === 'Delete') {
            dispatch(deleteTask(todo.id));
        }
    }

    return (
        <button onClick={handleClick}>{text}</button>
    );
}

export default Buttons;