import React from 'react';
import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
    const {data, isLoading, error} = useGenres()
    return (
        <ul>
            {data.map(gen => <li key={gen.id}>{gen.name}</li>)}
        </ul>
    );
};

export default GenreList;