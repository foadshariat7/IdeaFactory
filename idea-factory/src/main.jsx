import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './MainPage.jsx';
import UserProfile from './UserProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <MainPage />,
  },
  {
    path: "/userProfile",
    element: <UserProfile></UserProfile>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
