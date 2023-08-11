import React from 'react';
import useMovies from "../hooks/useMovies.ts";

interface Props {
    gameId: number
}

const GameTrailer = ({gameId}: Props) => {
    const {data, error, isLoading} = useMovies(gameId)
    if (isLoading) return null;
    if (error) throw error;
    const first = data?.results[0]
    if (!first) return null;
    console.log("Found movies")

    return (
        <video src={first.data[480]} poster={first.preview} controls/>
    );
};

export default GameTrailer;
