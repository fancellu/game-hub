import useGenres from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, Spinner} from "@chakra-ui/react";
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
            <List.Root variant='plain'>
                {data.results.map(gen => <List.Item key={gen.id} paddingY='5px'>
                    <HStack alignContent='space-between'>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(gen.image_background)}
                               objectFit='cover'/>
                        <Button textAlign='left' whiteSpace='normal' height='auto' paddingX={0} flexShrink={1}
                                fontWeight={gen.id === genreId ? 'bold' : 'normal'}
                                onClick={() => setGenreId(gen.id)}
                                fontSize='lg' variant='plain'
                                _hover={{textDecoration: 'underline'}}>{gen.name}</Button>
                    </HStack></List.Item>)}
            </List.Root>
        </>
    );
};

export default GenreList;
