import MenuItem from './MenuItem';
import useGlobal from '../services/useGlobal';

export default function Menu({
  visible = true
}) {
  const { role, username } = useGlobal();
  const isAdmin = role === 'admin';

  function logout() {
    localStorage.removeItem('session');
    window.location.href = '/';
  }

  return <nav
    style={{
      backgroundColor: 'lightblue',
      display: visible ? '' : 'none',
    }}
  >
    <MenuItem to="/">Inicio</MenuItem>
    {!username && <MenuItem to="/login">Login</MenuItem>}
    {isAdmin && <MenuItem to="/users">Usuarios</MenuItem>}
    {username && <MenuItem onClick={logout}>Salir</MenuItem>}
    <MenuItem to="/about">Acerca de</MenuItem>
  </nav>;
}