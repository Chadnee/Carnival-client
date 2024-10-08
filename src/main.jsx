import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routers/Router';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <QueryClientProvider client={queryClient}>
    <div className="font-titilliumWeb">
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
   </React.StrictMode>
)
