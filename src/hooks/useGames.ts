import useGameQueryStore from "../store.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";
import ApiClient, {FetchResponse} from "../services/api-client.ts";


export interface Game {
    id: number,
    name: string,
    background_image: string;
    parent_platforms: { platform: Platform } [],
    metacritic: number,
    rating_top: number,
    description_raw: string,
    slug: string
}

const apiClient = new ApiClient<Game>('/games')

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
            queryKey: ['games', gameQuery],
            queryFn: ({pageParam = 1}) => apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            }),
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined
            }
        }
    )
}

export default useGames