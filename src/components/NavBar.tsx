import React from 'react';
import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColourModeSwitch from "./ColourModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Link to={'/'}><Image src={logo} boxSize="60px" objectFit='cover'/></Link>
            <SearchInput/>
            <ColourModeSwitch/>
        </HStack>
    );
};

export default NavBar;