import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

const ColourModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
    return (
        <HStack><Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/><Text
            whiteSpace='nowrap'>Dark Mode</Text></HStack>
    );
};

export default ColourModeSwitch;