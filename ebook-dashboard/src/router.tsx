import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/Pages/Login";
import HomePage from "@/Pages/Home";
import RegisterPage from "./Pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
])

export default router;