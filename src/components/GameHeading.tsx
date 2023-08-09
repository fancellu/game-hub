import {Heading} from '@chakra-ui/react'
import {GameQuery} from '../App'
import useGenres from "../hooks/useGenres.ts";
import usePlatforms from "../hooks/usePlatforms.ts";
import usePlatform from "../hooks/usePlatform.ts";
import useGenre from "../hooks/useGenre.ts";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    const genre = useGenre(gameQuery.genreId)
    const platform = usePlatform(gameQuery.platformId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading