import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";

import App from './App.jsx';
import Country from '/src/pages/Country.jsx';
import Home from '/src/pages/Home.jsx'
import Error from '/src/components/Error.jsx'


import './CSS/output.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:country',
        element: <Country />
      }
    ]
  }
])

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router = {router} />);