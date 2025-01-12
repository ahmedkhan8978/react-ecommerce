import React from 'react';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage> ,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage> ,
  },
]); 

function App() {
  return (
    <div className="App">
          <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
