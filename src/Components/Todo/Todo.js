import { useState } from "react";
import Swal from "sweetalert2";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [date] = useState(new Date());
  const [checkbox, setcheckbox] = useState(Array(tasks.length).fill(false));

  const handleCheckboxChange = (index) => {
    const newcheckbox = [...checkbox];
    newcheckbox[index] = !newcheckbox[index];
    setcheckbox(newcheckbox);
  };

  const isChecked = (index) => {
    return checkbox[index];
  };

  const handleNewTask = () => {
    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editValue;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditValue("");
    } else {
      // Add new task
      if (input) {
        setTasks([...tasks, input]);
        setInput("");
      }
    }
  };

  const handleRemoveTask = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTodos = tasks.filter((_, i) => i !== index);
        setTasks(updatedTodos);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleEditTask = (index) => {
    if (editIndex === index) {
      // Update task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editValue;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditValue("");
    } else {
      // Start editing
      setEditIndex(index);
      setEditValue(tasks[index]);
    }
  };
  return (
    <>
      <h1 className="heading">TODO LIST</h1>
      <div className="container">
        <div className="topWrapper">
          <div>
            <input
              type="text"
              id="add-task"
              placeholder="Add a new todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn-addTask" onClick={handleNewTask}>
              Add Task
            </button>
          </div>
          <div>
            <select className="input-select">
              <option>All</option>
            </select>
          </div>
        </div>
        <div className="todoListWrapper">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <div className="d-flex">
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>
                  <div>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                    ) : (
                      <strong className={isChecked(index) ? "cancel" : "still"}>
                        {task}
                      </strong>
                    )}
                    <p className="text-muted">{date.toLocaleString()}</p>
                  </div>
                </div>
                <div>
                  <button
                    className="ms-3"
                    onClick={() => handleEditTask(index)}
                  >
                    {editIndex === index ? "update" : "edit"}
                  </button>
                  <button
                    className="ms-3"
                    onClick={() => handleRemoveTask(index)}
                  >
                    trash
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
