import React, {useRef} from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import useGameQueryStore from "../store.ts";


const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText)
    return (
        <form onSubmit={(event => {
            event.preventDefault()
            if (inputRef.current) setSearchText(inputRef.current.value)
        })}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} borderRadius={20} placeholder='Search games...' variant='filled'/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;
