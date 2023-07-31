import React, {useEffect, useState} from 'react';
import apiClient from "../services/api-client.ts";
import {Text} from "@chakra-ui/react";

interface Game {
    id: number,
    name: string
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => {
                setGames(res.data.results)
            })
            .catch(err => setError(err.message))
    }, [])

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(g => <li key={g.id}>{g.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;