import React from 'react';
import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image, Skeleton, SkeletonText, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";


const GameCardSkeleton = () => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(null)}/>
            <Skeleton height='200px'/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;