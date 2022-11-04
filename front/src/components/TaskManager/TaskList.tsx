import { ITask } from "../../pages/TaskManager"
import { TbEditCircle } from "react-icons/tb"
import { MdDeleteOutline } from "react-icons/md"


interface Props {
  taskList: ITask[]
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskList: React.FC<Props> = ({ taskList, setTaskList }) => {
  return (
    <>
      {taskList.length < 1 && (<div>No hay tareas</div>)}

      {taskList.length > 1 && (
        <table className="table">
          <thead className="table__head">
            <tr>
              <th>Proyecto</th>
              <th>Tarea</th>
              <th>Responsable</th>
              <th>Herramientas</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {taskList.map((task, index) => (
              <tr className="table__row">
                <td key={index}>
                  <div>{task.project}</div>
                </td>
                <td> {task.title}</td>
                <td> {task.title}</td>
                <td className="table__tools">
                  <TbEditCircle /> |
                  <MdDeleteOutline />
                </td>
              </tr >
            ))}
          </tbody>
        </table>
      )}

    </>
  );
};

export default TaskList;
