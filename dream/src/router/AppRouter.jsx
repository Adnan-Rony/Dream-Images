import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";

import FullGalleryPage from "../components/sections/FullGalleryPage.jsx";



export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",           
        element: <HomePage />,
      },
       {
        path: "/gallery/full",
        element: <FullGalleryPage />,
      },
      
    ],
  },
]);