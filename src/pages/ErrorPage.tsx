import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import NavBar from "../components/NavBar.tsx";

const ErrorPage = () => {
    const err = useRouteError() as unknown;
    const isErrorResponse = isRouteErrorResponse(err)

    console.error(err)
    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>
                    {isErrorResponse ? 'Invalid page' : 'Sorry, an unexpected error has occurred'}
                </Text>
            </Box>
        </>
    );
};

export default ErrorPage;
