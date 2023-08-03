import genres from "../data/genres.ts";

export interface Genre {
    id: number,
    name: string,
    image_background: string
}


// We now pull genres from local json, as it hardly ever changes, 1 less network access
const useGenres = () => ({
    data: genres,
    isLoading: false,
    error: null
})

export default useGenres;