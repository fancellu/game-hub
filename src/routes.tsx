import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import ErrorPage from "./routing/ErrorPage.tsx";
import GameDetailPage from "./pages/GameDetailPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'games/:id', element: <GameDetailPage/>},
        ]
    },
    // {
    //     element: <PrivateRoutes/>,
    //     children: [
    //         {
    //             path: 'users', element: <UsersPage/>, children: [
    //                 {path: ':id', element: <UserDetail/>}
    //             ]
    //         }
    //     ]
    // }
])

export default router