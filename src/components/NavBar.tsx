import React from 'react';
import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColourModeSwitch from "./ColourModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize="60px"/>
            <SearchInput/>
            <ColourModeSwitch/>
        </HStack>
    );
};

export default NavBar;