import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Error from './pages/Error';
import Home from '@/pages/Home';
import './globals.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/test',
        element: <h1>Testing 1 2 3</h1>,
      },
    ],
  },
]);

// Render your React component instead
// @ts-ignore
const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
