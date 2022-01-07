import React, { FC } from "react";
import { ITodo } from "../interface";
interface IProps {
  task: ITodo;
  completeTask: (taskNametoDelete: string) => void;
  //completeTask(taskNametoDelete: string):void
}
const TodoTask: FC<IProps> = (props) => {
const { task, completeTask } = props;
  return (
    <div className="task">
      <div className="content">
        <span>{task.task}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => completeTask(task.task)}>X</button>
    </div>
  );
};

export default TodoTask;
