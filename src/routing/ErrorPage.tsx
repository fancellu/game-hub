import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError() as unknown;
    const errorResponse = isRouteErrorResponse(err)
    console.log(err)

    return (
        <>
            <h1>Oops...</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {errorResponse ? 'Invalid page' : 'Unexpected error'}
            </p>
        </>
    );
};

export default ErrorPage;
