import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITodo } from "./interface";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "deadline") {
      //Added a plus sign to convert the input string to int
      setDeadline(+event.target.value);
    }
  };

  const handleSubmit = (): void => {
    setTodoList([...todoList, { task, deadline }]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNametoDelete: string): void => {
    const item = todoList.filter((task) => task.task !== taskNametoDelete);
    setTodoList(item);
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            value={task}
            name="task"
            placeholder="Task..."
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Deadline..."
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((todo: ITodo, index: number) => {
          return (
            <TodoTask key={todo.task} task={todo} completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
