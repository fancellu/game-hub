import React from 'react';
import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = () => {
    const {data, isLoading, error} = useGenres()

    if (error) return null;
    if (isLoading) return <Spinner/>
    return (
        <List>
            {data.map(gen => <ListItem key={gen.id} paddingY='5px'>
                <HStack alignContent='space-between'>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(gen.image_background)}/>
                    <Text fontSize='lg'>{gen.name}</Text>
                </HStack></ListItem>)}
        </List>
    );
};

export default GenreList;