import { useEffect, useState } from "react";
import TaskForm from "../components/TaskManager/TaskForm";
import TaskList from "../components/TaskManager/TaskList";

export interface ITask {
  title: string
  project: string
}

export interface IProject {
  title: string
}


const data = [
  {
    title: "Hannah Bertoni",
  },
  { title: "Abogada María Guzmán" },

  { title: "Piensos Vegueta" }
]


const TaskManager: React.FC = () => {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    setProjects(data)
  }, [])


  return (
    <div className="taskManager">
      <TaskForm taskList={taskList} setTaskList={setTaskList} projects={projects} setProjects={setProjects} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskManager;
