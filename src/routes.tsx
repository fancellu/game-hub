import {createBrowserRouter, createHashRouter} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import GameDetailPage from "./pages/GameDetailPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createHashRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'games/:slug', element: <GameDetailPage/>},
        ]
    },
])

export default router