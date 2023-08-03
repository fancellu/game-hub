import React from 'react';
import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColourModeSwitch from "./ColourModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
    onSearch: (searchTest: string) => void;
}

const NavBar = ({onSearch}: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize="60px"/>
            <SearchInput onSearch={onSearch}/>
            <ColourModeSwitch/>
        </HStack>
    );
};

export default NavBar;