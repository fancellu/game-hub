import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";

const PlatformSelector = () => {
    const {data, isLoading, error} = usePlatforms()
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
            <MenuList>
                {data.map(p => <MenuItem key={p.id}>{p.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;