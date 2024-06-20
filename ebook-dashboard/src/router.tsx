import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/Pages/Login";
import HomePage from "@/Pages/Home";
import RegisterPage from "./Pages/Register";
import DashboardLayout from "./Layouts/DashboardLayout";
import BooksPage from "./Pages/Books";

const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'books',
                element: <BooksPage />,
            }

        ]
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