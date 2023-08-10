import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import usePlatform from "../hooks/usePlatform.ts";
import useGameQueryStore from "../store.ts";


const PlatformSelector = () => {
    const {data, isLoading, error} = usePlatforms()
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
    const setPlatformId = useGameQueryStore(s => s.setPlatformId)
    const selectedPlatform = usePlatform(selectedPlatformId)

    if (isLoading) return;
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data.results.map(p => <MenuItem onClick={() => setPlatformId(p.id)} key={p.id}>{p.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;