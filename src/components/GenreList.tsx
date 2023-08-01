import React from 'react';
import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
    const {genres, isLoading, error} = useGenres()
    return (
        <ul>
            {genres.map(gen => <li key={gen.id}>{gen.name}</li>)}
        </ul>
    );
};

export default GenreList;