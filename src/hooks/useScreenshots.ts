import ApiClient from "../services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import {Screenshot} from "../entities/Screenshot.ts";


const useScreenshots = (id: number) => {
    const apiClient = new ApiClient<Screenshot>('/games/' + id + "/screenshots")
    return useQuery({
        queryKey: ['screenshots', id],
        queryFn: apiClient.getAll
    })
}
export default useScreenshots