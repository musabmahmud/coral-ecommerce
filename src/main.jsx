import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';

import store from './store/store.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home/Home.jsx';
import SingleProduct from './pages/home/SingleProduct.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import Cart from './pages/Cart.jsx';


// CSS FILES 

import App from './App.jsx';
import './index.css';
import { productsFetch } from './features/productSlice.js';


store.dispatch(productsFetch(1));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
      ,
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/product/:id",
        element: <SingleProduct />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
    // errorElement: <ErrorPage />,
  },
]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
