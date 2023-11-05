import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Main from "../components/MainLayout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddFood from "../pages/AddFood";
import ManageMyFood from "../pages/ManageMyFood";
import MyFoodRequest from "../pages/MyFoodRequest";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addFood',
                element: <PrivateRoutes><AddFood /></PrivateRoutes>
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods />
            },
            {
                path: '/manageMyFoods',
                element: <PrivateRoutes><ManageMyFood /></PrivateRoutes>
            },
            {
                path: '/myFoodRequest',
                element: <PrivateRoutes ><MyFoodRequest /></PrivateRoutes >
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])
export default router