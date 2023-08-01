import React, {useEffect, useState} from 'react';
import apiClient from "../services/api-client.ts";
import {Game, Platform} from "./useGames.ts";

interface Genre {
    id: number,
    name: string,
}

interface FetchGenresResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenres(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                if (err.message === "canceled") return
                setError(err.message)
                setLoading(false)
            })
        return () => {
            controller.abort()
        }
    }, [])

    return {
        genres, error, isLoading
    }
};

export default useGenres;