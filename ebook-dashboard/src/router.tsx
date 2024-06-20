import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/Pages/Login";
import HomePage from "@/Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
])

export default router;