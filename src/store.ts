import {create} from "zustand"

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: String;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (text: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({gameQuery: {searchText}})),
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}}))
}))

export default useGameQueryStore