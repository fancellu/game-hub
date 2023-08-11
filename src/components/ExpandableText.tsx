import React, {useState} from 'react';
import {Button, Text} from "@chakra-ui/react";

interface Props {
    children: string
}

const ExpandableText = ({children}: Props) => {
    const limit = 300
    const [isExpanded, setExpanded] = useState(false)
    if (!children) return null;
    const isSmall = children.length <= limit
    if (isSmall)
        return <Text>{children}</Text>
    const showString = isExpanded ? children : children.substring(0, limit) + "..."
    return (
        <>
            <Text>{showString}
                <Button marginLeft={1} size='xs' fontWeight='bold' colorScheme='yellow'
                        onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</Button>
            </Text>
        </>
    );
};

export default ExpandableText;
