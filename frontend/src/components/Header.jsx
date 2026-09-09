import useGlobal from '../services/useGlobal';

export default function Header({
  onClickMenu
}) {
  const { username } = useGlobal();

  return <header
    style={{
      backgroundColor: 'pink',
    }}
  >
    <img
      src="/menu.svg"
      alt="Menú"
      width={25}
      onClick={() => onClickMenu()}
    />
    Acá va el título de la página
    {username && <span>Bienvenido: {username}</span>}
  </header>;
}