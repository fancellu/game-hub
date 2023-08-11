import React from 'react';
import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {GridItem, Heading, SimpleGrid, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

const GameDetailPage = () => {
    const {slug} = useParams()
    const {data, isLoading, error} = useGame(slug!)

    if (isLoading) return <Spinner/>

    if (error) throw error;

    // const {data: movies} = useMovies(data.id)
    // console.log(movies)


    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            <GridItem>
                <Heading>{data.name}</Heading>
                <ExpandableText>{data.description_raw}</ExpandableText>
                <GameAttributes game={data}/>
            </GridItem>
            <GridItem>
                <GameTrailer gameId={data.id}/>
                <GameScreenshots gameId={data.id}/>
            </GridItem>
        </SimpleGrid>
    );
};

export default GameDetailPage;
