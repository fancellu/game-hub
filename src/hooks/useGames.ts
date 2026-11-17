import useGameQueryStore from "../store.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {Game} from "../entities/Game.ts";


const apiClient = new ApiClient<Game>('/games')

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery({
            queryKey: ['games', gameQuery],
            queryFn: ({pageParam}) => apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            }),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined
            }
        }
    )
}

export default useGames