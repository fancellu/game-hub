import React from 'react';
import useGenres from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../store.ts";

const GenreList = () => {
    const {data, isLoading, error} = useGenres()
    const genreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setGenreId = useGameQueryStore(s => s.setGenreId)
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
                                fontWeight={gen.id === genreId ? 'bold' : 'normal'}
                                onClick={() => setGenreId(gen.id)}
                                fontSize='lg' variant='link'>{gen.name}</Button>
                    </HStack></ListItem>)}
            </List>
        </>
    );
};

export default GenreList;