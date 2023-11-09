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
import AvailableFoodDetails from "../pages/AvailableFoods/AvailableFoodDetails";
import UpdateManagedFood from "../pages/UpdateManagedFood";
import ManageFoodForm from "../pages/UpdateFoodForm";
import UpdateFoodForm from "../pages/UpdateFoodForm";
import ManageSingleFood from "../pages/ManageSingleFood";
// import ManageSingleFood from "../pages/ManageSingleFood";

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
                path: '/updateFoodsForm/:id',
                element: <UpdateFoodForm />,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/availableFoods/${params.id}`)
            },
            {
                path: '/manageSingleFood',
                element: <ManageSingleFood />

            },
            {
                path: '/manageMyFoods',
                element: <PrivateRoutes><ManageMyFood /></PrivateRoutes>,
            },
            {
                path: '/myFoodRequest',
                element: <PrivateRoutes ><MyFoodRequest /></PrivateRoutes >,
                loader: () => fetch('http://localhost:5000/api/v1/requestedFoodDisplayed')
            },
            {
                path: '/availableFoodDetails/:id',
                element: <PrivateRoutes ><AvailableFoodDetails /></PrivateRoutes >,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/availableFoods/${params.id}`)
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