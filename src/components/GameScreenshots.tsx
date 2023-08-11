import React from 'react';
import useScreenshots from "../hooks/useScreenshots.ts";
import {Image, SimpleGrid, Spinner} from "@chakra-ui/react";

interface Props {
    gameId: number
}

const GameScreenshots = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenshots(gameId)

    if (!data) return null;
    if (error) throw error;
    if (isLoading) return <Spinner/>

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {data.results.map(ss => <Image key={ss.id} src={ss.image}/>)}
        </SimpleGrid>
    );
};

export default GameScreenshots;
