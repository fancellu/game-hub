import {Switch} from "@chakra-ui/react";
import {useColorMode} from "./ui/color-mode.tsx";

const ColourModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
    return (
        <Switch.Root colorPalette='green' checked={colorMode === 'dark'} onCheckedChange={toggleColorMode}>
            <Switch.HiddenInput/>
            <Switch.Control/>
            <Switch.Label whiteSpace='nowrap' fontWeight='normal' fontSize='md'>Dark Mode</Switch.Label>
        </Switch.Root>
    );
};

export default ColourModeSwitch;
