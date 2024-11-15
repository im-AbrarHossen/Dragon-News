import { createBrowserRouter } from "react-router-dom";
import Home from "./Layouts/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
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