import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Donation from './Component/Donation/Donation.jsx';
import Statistics from './Component/Statistics/Statistics.jsx';
import CardDetails from './Component/CardDetails/CardDetails.jsx';
import ErrorMessage from './Component/ErrorMessage/ErrorMessage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorMessage></ErrorMessage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader: ()=> fetch('/donation.json'),
      },
      {
        path:"/card/:id",
        element:<CardDetails></CardDetails>,
        loader: ()=> fetch('/donation.json')
      },

      {
        path:"/statistic",
        element:<Statistics></Statistics>,
        loader: ()=> fetch('/donation.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
