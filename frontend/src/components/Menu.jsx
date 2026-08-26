import MenuItem from './MenuItem';

export default function Menu() {
  return <nav
    style={{
      backgroundColor: 'lightblue',
    }}
  >
    <MenuItem to="/">Inicio</MenuItem>
    <MenuItem to="/login">Login</MenuItem>
    <MenuItem to="/about">Acerca de</MenuItem>
    <MenuItem to="/otra">Otra cosa</MenuItem>
  </nav>;
}