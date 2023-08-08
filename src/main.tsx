import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import App from './App.tsx'
import theme from "./theme.ts";
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <App/>
                <ReactQueryDevtools/>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
