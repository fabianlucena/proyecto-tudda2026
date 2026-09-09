import MenuItem from './MenuItem';
import useGlobal from '../services/useGlobal';

export default function Menu({
  visible = true
}) {
  const { role, username } = useGlobal();
  const isAdmin = role === 'admin';

  return <nav
    style={{
      backgroundColor: 'lightblue',
      display: visible ? '' : 'none',
    }}
  >
    <MenuItem to="/">Inicio</MenuItem>
    {!username && <MenuItem to="/login">Login</MenuItem>}
    <MenuItem to="/about">Acerca de</MenuItem>
    {isAdmin && <MenuItem to="/users">Usuarios</MenuItem>}
  </nav>;
}