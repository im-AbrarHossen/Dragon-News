import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Layouts/Home";
import CategoryNews from "./components/CategoryNews";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "",
                element: <Navigate to="category/01"></Navigate>,
            },
            {
                path: "category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(
                    `https://openapi.programming-hero.com/api/news/category/${params.id}`
                ),
            },
        ],
    },
    {
        path: "/news",
        element: <h2>layout</h2>,
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "*",
        element: <h2>error</h2>,
    },
]);

export default router;