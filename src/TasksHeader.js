import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/todoSlice'



const TasksHeader = () => {
  const tasks = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log("task", tasks);
  
  // const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>
          {/* {undoneTasks.length} */}
          test
          </strong>
      </p>
    </header>
  );
};

export default TasksHeader;
