import {useQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";

import {Game} from "../entities/Game.ts";


const apiClient = new ApiClient<Game>('/games')

const useGame = (slug: string) => {
    return useQuery({
        queryKey: ['games', slug],
        queryFn: () => apiClient.get(slug)
    })
}
export default useGame