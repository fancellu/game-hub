import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "./components/ui/provider.tsx";
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider>
                <RouterProvider router={router}></RouterProvider>
                <ReactQueryDevtools/>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>,
)
