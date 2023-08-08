import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platform} from "../hooks/usePlatforms.ts";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data, isLoading, error} = usePlatforms()
    const selectedPlatform = data.results.find(plat => plat.id == selectedPlatformId)

    if (isLoading) return;
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data.results.map(p => <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>{p.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;