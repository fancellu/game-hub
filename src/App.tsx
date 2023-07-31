// import './App.css'

import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";

function App() {

    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}>
        <GridItem area='nav'><NavBar></NavBar></GridItem>
        <Show above="lg">
            <GridItem area='aside'>Aside</GridItem>
        </Show>
        <GridItem area='main'><GameGrid/></GridItem>
    </Grid>
}

export default App
