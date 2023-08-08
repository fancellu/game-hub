import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 60_000 * 60 * 24,
        initialData: {count: platforms.length, results: platforms}
    })
}

export default usePlatforms