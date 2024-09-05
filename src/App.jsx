import  React,{useState,useEffect}  from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
Navbar
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm/>,
    },
    {
      path: "/About",
      element: <About/>,
    },
  ]);
  
  
  return (
  <>
  <RouterProvider router={router} />
  </>
  );
}

export default App;
