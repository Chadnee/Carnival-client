import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routers/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <div className="font-titilliumWeb">
    <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>
)
