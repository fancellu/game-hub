import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platform} from "../hooks/usePlatforms.ts";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {data, isLoading, error} = usePlatforms()
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data.map(p => <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>{p.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;