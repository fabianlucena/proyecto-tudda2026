import useApi from '../services/useApi';

export default function About() {
  const { authorization } = useApi();

  return <h6>
    Acerca de
    {authorization}
  </h6>;
}