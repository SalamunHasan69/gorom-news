import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import News from "../Pages/News";
import TermsAndConditions from "../Pages/TermsAndConditions";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/news`)
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
      },
    ]
  }
]);