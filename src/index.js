import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './routes/App';
import Home from './routes/Home';
import Shop from './routes/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "home",
      element: <Home />,
    },
    {
      path:"shop",
      element: <Shop />,
    },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
