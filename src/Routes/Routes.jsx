import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import AllSpot from "../components/AllSpot/AllSpot";
import AddSpot from "../components/AddSpot/AddSpot";
import MyList from "../components/MyList/MyList";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import UpdateTouristSpot from "../components/UpdateTouristSpot/UpdateTouristSpot";
import TouristSpotDetails from "../components/TouristSpotDetails/TouristSpotDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all-spot",
                element: <AllSpot></AllSpot>,
            },
            {
                path: "/add-spot",
                element: <PrivateRoute>
                    <AddSpot />
                </PrivateRoute>,
            },
            {
                path: "/my-list",
                element: <PrivateRoute>
                    <MyList />
                </PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/update-tourist-spot/:id",
                element: <PrivateRoute>
                    <UpdateTouristSpot />
                </PrivateRoute>,
            },
            {
                path: "/tourist-spot/:id",
                element: <PrivateRoute>
                    <TouristSpotDetails />
                </PrivateRoute>
            }
        ],
    },
]);