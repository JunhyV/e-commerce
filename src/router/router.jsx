import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Hats from "../pages/Hats";
import Home from "../pages/Home";
import Jackets from "../pages/Jackets";
import Mens from "../pages/Mens";
import Sneakers from "../pages/Sneakers";
import Womens from "../pages/Womens";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic/>,
        error: <Error/>,
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
        ],
    },
])