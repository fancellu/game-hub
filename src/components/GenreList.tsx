import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres()

    if (error) return null;
    if (isLoading) return <Spinner/>
    return (
        <List>
            {data.map(gen => <ListItem key={gen.id} paddingY='5px'>
                <HStack alignContent='space-between'>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(gen.image_background)}/>
                    <Button onClick={() => onSelectGenre(gen)} fontSize='lg' variant='link'>{gen.name}</Button>
                </HStack></ListItem>)}
        </List>
    );
};

export default GenreList;