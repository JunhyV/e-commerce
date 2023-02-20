import { createBrowserRouter } from "react-router-dom";
import Item from "../components/forEach/Item";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../layout/NotFound";
import Finish from "../pages/Finish";
import Hats from "../pages/Hats";
import Home from "../pages/Home";
import Jackets from "../pages/Jackets";
import Login from "../pages/Login";
import Mens from "../pages/Mens";
import Register from "../pages/Register";
import Sneakers from "../pages/Sneakers";
import Womens from "../pages/Womens";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/hats',
                element: <Hats/>,
            },
            {
                path: '/jackets',
                element: <Jackets/>,
            },
            {
                path: '/mens',
                element: <Mens/>,
            },
            {
                path: '/sneakers',
                element: <Sneakers/>,
            },
            {
                path: '/womens',
                element: <Womens/>,
            },
            {
                path: "/store/:id",
                element: <Item />,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/finish',
                element: <Finish/>
            }
        ],
    },
])