import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from 'react-icons/fa'
import {MdPhoneIphone} from "react-icons/md";
import {BsGlobe, BsNintendoSwitch} from "react-icons/bs";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

import {Platform} from "../entities/Platform.ts";

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: BsNintendoSwitch,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack marginY={1}>
            {/* Skip platforms without an icon (e.g. atari, sega): Chakra 3's Icon throws on an undefined `as` */}
            {platforms.filter(platform => iconMap[platform.slug]).map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
            ))}
        </HStack>
    );
};

export default PlatformIconList;