import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import About from './components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/about",
     element: <About /> ,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
import { RouterProvider } from "react-router-dom";
import Navber from './components/Navber.jsx';import Footer from './components/Footer.jsx';

