import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Layouts/Home";
import CategoryNews from "./components/CategoryNews";

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
        path: "/auth",
        element: <h2>login</h2>,
    },
    {
        path: "*",
        element: <h2>error</h2>,
    },
]);

export default router;