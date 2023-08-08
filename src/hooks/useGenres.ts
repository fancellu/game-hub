import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: () => apiClient.get('/genres').then(res => res.data),
        staleTime: 60_000 * 60 * 24,
        initialData: {count: genres.length, results: genres}
    })
}

export default useGenres;