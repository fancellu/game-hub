import React from 'react';
import {Game} from "../entities/Game.ts";
import DefinitionItem from "./DefintionItem.tsx";
import {SimpleGrid, Text} from "@chakra-ui/react";
import CriticScore from "./CriticScore.tsx";

interface Props {
    game: Game
}

const GameAttributes = ({game: data}: Props) => {
    return (
        <SimpleGrid columns={2} as='dl'>
            <DefinitionItem term='Platforms'>{data.parent_platforms.map(({platform}) =>
                <Text key={platform.id}>{platform.name}</Text>)}</DefinitionItem>
            <DefinitionItem term='Metascore'>
                <CriticScore score={data.metacritic}/>
            </DefinitionItem>
            <DefinitionItem term='Genres'>{data.genres.map(genre =>
                <Text key={genre.id}>{genre.name}</Text>)}</DefinitionItem>
            <DefinitionItem term='Genres'>{data.publishers.map(publisher =>
                <Text key={publisher.id}>{publisher.name}</Text>)}</DefinitionItem>
        </SimpleGrid>
    );
};

export default GameAttributes;
