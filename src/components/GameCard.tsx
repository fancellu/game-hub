import React from 'react';
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Game} from "../entities/Game.ts";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    const navigate = useNavigate()
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    {game.parent_platforms &&
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>}

                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'><Link to={'/games/' + game.slug}>{game.name}</Link></Heading>
                <Emoji rating={game.rating_top}/>
            </CardBody>
        </Card>
    );
};

export default GameCard;