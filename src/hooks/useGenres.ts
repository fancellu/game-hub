import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const apiClient = new ApiClient<Genre>('/genres')

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 60_000 * 60 * 24,
        initialData: {count: genres.length, results: genres}
    })
}

export default useGenres;