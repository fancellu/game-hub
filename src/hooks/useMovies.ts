import ApiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import {Movie} from "../entities/Movie.ts";


const useMovies = (id: number) => {
    const apiClient = new ApiClient<Movie>('/games/' + id + "/movies")
    return useQuery({
        queryKey: ['movies', id],
        queryFn: apiClient.getAll
    })
}
export default useMovies