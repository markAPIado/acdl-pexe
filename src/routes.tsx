import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './public-pages/ErrorPage';
import Unsplash from './unsplash/Unsplash';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [{ path: '/', element: <Unsplash /> }]
  }
]);

export default router;
