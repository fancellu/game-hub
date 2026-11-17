import React from 'react';
import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColourModeSwitch from "./ColourModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import {Link} from "react-router-dom";
import useGameQueryStore from "../store.ts";

const NavBar = () => {
    const reset = useGameQueryStore(s => s.reset)
    return (
        <HStack padding='10px'>
            {/* The logo is "start over": clear search, genre, platform and sort */}
            <Link to={'/'} onClick={reset}><Image src={logo} boxSize="60px" objectFit='cover'/></Link>
            <SearchInput/>
            <ColourModeSwitch/>
        </HStack>
    );
};

export default NavBar;