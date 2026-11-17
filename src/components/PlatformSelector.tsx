import {Button, Menu, Portal} from "@chakra-ui/react";
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
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant='subtle'>{selectedPlatform?.name || 'Platforms'} <BsChevronDown/></Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.results.map(p =>
                            <Menu.Item key={p.id} value={String(p.id)}
                                       onSelect={() => setPlatformId(p.id)}>{p.name}</Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default PlatformSelector;
