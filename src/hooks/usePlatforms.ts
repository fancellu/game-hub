import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import {FetchResponse} from "./useData.ts";
import platforms from "../data/platforms.ts";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get('/platforms/lists/parents').then(res => res.data),
        staleTime: 60_000 * 60 * 24,
        initialData: {count: platforms.length, results: platforms}
    })
}

export default usePlatforms