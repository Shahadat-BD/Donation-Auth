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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/donation",
        loader: ()=> fetch('donation.json'),
        element:<Donation></Donation>
      },
      {
        path:"/card/:id",
        loader: ()=> fetch('donation.json'),
        element:<CardDetails></CardDetails>,

      },

      {
        path:"/statistic",
        element:<Statistics></Statistics>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
