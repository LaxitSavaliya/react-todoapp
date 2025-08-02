import { deleteTask } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function DeleteTask({ id }) {
    const dispatch = useDispatch();

    let handleDelete = () => {
        dispatch(deleteTask(id));
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteTask