import React, { FormEvent, useEffect, useState } from "react";
import { IProject, ITask } from "../../pages/TaskManager"



interface ITaskForm {
  title: string
  project: string
}

interface Props {
  taskList: ITask[]
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
  projects: IProject[]
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>
}


const TaskForm: React.FC<Props> = ({ taskList, setTaskList, projects }) => {

  const [newTask, setNewTask] = useState<string>("")
  const [newProject, setNewProject] = useState<string>("")


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(newTask)
    addTask()

    e.currentTarget.reset()
  }

  const addTask = (): void => {
    const tasks = [...taskList, { title: newTask, project: newProject }]
    setTaskList(tasks)
    console.log(taskList)
  }

  useEffect(() => {
    console.log(taskList)
  }, [taskList])

  return (
    <>
      <form className="task__form" onSubmit={handleSubmit}>
        <div className="task__form__control">
          <div className="task__form__control__select">
            <select className="task__form__input" placeholder="Nombre del proyecto" onChange={(e) => setNewProject(e.target.value)}>
              <option selected>Elige un proyecto</option>
              {projects.map((project, index) => (
                <option key={index}>{project.title}</option>
              ))}
            </select>
          </div>
          <input className="task__form__input" placeholder="Tarea" type="text" onChange={(e) => setNewTask(e.target.value)} />
        </div>
        <button className="button-primary" type="submit">Añadir</button>
      </form>
    </>
  );
};

export default TaskForm;
