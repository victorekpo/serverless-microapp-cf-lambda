import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/Error';
import Home from '@/pages/Home';
import './globals.css';
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        errorElement: _jsx(Error, {}),
        children: [
            {
                index: true,
                element: _jsx(Home, {}),
            },
            {
                path: '/test',
                element: _jsx("h1", { children: "Testing 1 2 3" }),
            },
        ],
    },
]);
// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(_jsx(RouterProvider, { router: router }));
