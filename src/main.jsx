import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from "./Login.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//since the path will just have a ?, itll be the home page of the app; it'll then render the App component
const router = createBrowserRouter([
  {path: "/", element:<Login/> },
  {path: "/App", element: <App/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
