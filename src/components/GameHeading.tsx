import {Heading} from '@chakra-ui/react'
import {GameQuery} from '../App'
import useGenres from "../hooks/useGenres.ts";
import usePlatforms from "../hooks/usePlatforms.ts";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) => {
    const {data: genres} = useGenres()
    const genre = genres.results.find(genre => genre.id == gameQuery.genreId)
    const {data: platforms} = usePlatforms()
    const platform = platforms.results.find(genre => genre.id == gameQuery.genreId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading