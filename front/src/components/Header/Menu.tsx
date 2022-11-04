import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="header__menu">
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/hours">Horas</Link>
      </li>
      <li>
        <Link to="/taskManager">Tareas</Link>
      </li>
      <li>
        <Link to="/facturas">Facturas</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};

export default Menu;
