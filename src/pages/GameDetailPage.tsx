import React from 'react';
import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Heading, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";

const GameDetailPage = () => {
    const {slug} = useParams()
    const {data, isLoading, error} = useGame(slug!)

    if (isLoading) return <Spinner/>

    if (error) throw error;

    // const {data: movies} = useMovies(data.id)
    // console.log(movies)


    return (
        <>
            <Heading>{data.name}</Heading>
            <ExpandableText>{data.description_raw}</ExpandableText>
            <GameAttributes game={data}/>
            <GameTrailer gameId={data.id}/>
        </>
    );
};

export default GameDetailPage;
