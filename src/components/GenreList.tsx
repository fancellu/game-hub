import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres()

    if (error) return null;
    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.results.map(gen => <ListItem key={gen.id} paddingY='5px'>
                    <HStack alignContent='space-between'>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(gen.image_background)}
                               objectFit='cover'/>
                        <Button textAlign='left' whiteSpace='normal'
                                fontWeight={gen.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(gen)}
                                fontSize='lg' variant='link'>{gen.name}</Button>
                    </HStack></ListItem>)}
            </List>
        </>
    );
};

export default GenreList;