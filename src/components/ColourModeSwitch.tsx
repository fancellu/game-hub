import {HStack, Text, Switch, useColorMode} from "@chakra-ui/react";

const ColourModeSwitch = () => {
    const {toggleColorMode, colorMode}=useColorMode()
    return (
        <HStack><Switch colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode}/><Text>Dark Mode</Text></HStack>
    );
};

export default ColourModeSwitch;