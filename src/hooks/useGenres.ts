import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import genres from "../data/genres.ts";
import {Genre} from "../entities/Genre.ts";

const apiClient = new ApiClient<Genre>('/genres')

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 60_000 * 60 * 24,
        initialData: genres
    })
}

export default useGenres;