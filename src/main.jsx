import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/Home.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Shop from './pages/Shop.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />
      }
      ,
      {
        path: "/shop",
        element: <Shop />
      }
    ]
    // errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
