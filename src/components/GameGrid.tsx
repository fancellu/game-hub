import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const GameGrid = () => {

    const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>
    if (!data) return

    return (
        <InfiniteScroll dataLength={data.pages.reduce((total, page) => total + page.results.length, 0)}
                        next={fetchNextPage} hasMore={hasNextPage}
                        loader={<Spinner/>}
        >
            <SimpleGrid padding="10px" columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton/>
                        </GameCardContainer>
                    ))}
                {data && data.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map(game => <GameCardContainer key={game.id}>
                            <GameCard game={game}/>
                        </GameCardContainer>)}
                    </React.Fragment>)}

            </SimpleGrid>
        </InfiniteScroll>

    );
};

export default GameGrid;