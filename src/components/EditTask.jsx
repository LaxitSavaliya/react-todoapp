import { startEditTask } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function EditTask({ id }) {
    const dispatch = useDispatch();

    let handleEdit = () => {
        dispatch(startEditTask(id));
    }

    return (
        <button onClick={handleEdit}>Edit</button>
    );
}

export default EditTask;