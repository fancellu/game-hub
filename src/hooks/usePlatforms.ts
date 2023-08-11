import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import platforms from "../data/platforms.ts";
import {Platform} from "../entities/Platform.ts";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 60_000 * 60 * 24,
        initialData: platforms
    })
}

export default usePlatforms