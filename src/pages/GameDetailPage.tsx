import React from 'react';
import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Heading, Spinner, Text} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";

const GameDetailPage = () => {
    const {slug} = useParams()
    const {data, isLoading, error} = useGame(slug!)

    if (isLoading) return <Spinner/>

    if (error) throw error;

    return (
        <>
            <Heading>{data.name}</Heading>
            <ExpandableText>{data.description_raw}</ExpandableText>
        </>
    );
};

export default GameDetailPage;
