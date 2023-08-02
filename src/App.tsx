// import './App.css'

import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/usePlatforms.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null
    sortOrder: string
}

function App() {
    // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}
                 templateColumns={{
                     base: `1fr`,
                     lg: `200px 1fr`
                 }}
    >
        <GridItem area='nav'><NavBar></NavBar></GridItem>
        <Show above="lg">
            <GridItem area='aside' paddingX={5}><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => {
                console.log(genre);
                setGameQuery({...gameQuery, genre: genre})
            }}/></GridItem>
        </Show>
        <GridItem area='main'>
            <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                <PlatformSelector selectedPlatform={gameQuery.platform}
                                  onSelectPlatform={(plat) => setGameQuery({...gameQuery, platform: plat})}/>
                <SortSelector sortOrder={gameQuery.sortOrder}
                              onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder: sortOrder})}/>
            </HStack>
            <GameGrid gameQuery={gameQuery}/></GridItem>
    </Grid>
}

export default App
