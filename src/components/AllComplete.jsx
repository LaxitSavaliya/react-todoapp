import { toggleAllComplete } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function AllComplete({ todos }) {
    const dispatch = useDispatch();

    let handleMarkAllDone = () => {
        dispatch(toggleAllComplete())
    }

    if (todos.length === 0) return null; // no tasks, no button

    const allDone = todos.every(todo => todo.complete);

    return (
        <div className='btn'>
            <button onClick={handleMarkAllDone}>
                {allDone ? 'All unDone' : 'All Done'}
            </button>
        </div>
    )
}

export default AllComplete;