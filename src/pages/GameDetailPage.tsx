import React from 'react';
import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Heading, Spinner, Text} from "@chakra-ui/react";

const GameDetailPage = () => {
    const {slug} = useParams()
    const {data, isLoading, error} = useGame(slug!)

    if (isLoading) return <Spinner/>

    if (error) throw error;

    return (
        <>
            <Heading>{data.name}</Heading>
            <Text>{data.description_raw}</Text>
        </>
    );
};

export default GameDetailPage;
