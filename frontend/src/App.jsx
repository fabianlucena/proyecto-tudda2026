import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { ApiProvider } from './services/useApi';
import { GlobalProvider } from './services/useGlobal';

export default function App() {
  const router = createBrowserRouter(routes);

  return <ApiProvider>
    <GlobalProvider>
      <RouterProvider
        router={router}
      />
    </GlobalProvider>
  </ApiProvider>;
}
