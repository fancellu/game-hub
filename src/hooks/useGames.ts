import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import useData from "./useData.ts";
import {Genre} from "./useGenres.ts";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string;
    parent_platforms: { platform: Platform } [],
    metacritic: number
}

const useGames = () => useData<Game>('/games')
export default useGames