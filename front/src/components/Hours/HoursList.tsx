

const HoursList = () => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th>Fecha</th>
          <th>Desde</th>
          <th>Hasta</th>
          <th>Total Trabajado</th>
          <th>Comentario</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__row">
          <td>23/2/2022</td>
          <td>8:00</td>
          <td>16:00</td>
          <td>8 horas</td>
          <td>Estuvo bien</td>
          <td>Crema</td>
        </tr>
      </tbody>
    </table>
  )
}

export default HoursList