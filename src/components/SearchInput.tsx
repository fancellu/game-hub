import {useEffect, useRef} from 'react';
import {Input, InputGroup} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import useGameQueryStore from "../store.ts";
import {useNavigate} from "react-router-dom";


const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText)
    const searchText = useGameQueryStore(s => s.gameQuery.searchText)
    const navigate = useNavigate()

    // The input is uncontrolled, so clear it when the search is reset elsewhere (e.g. the logo)
    useEffect(() => {
        if (!searchText && inputRef.current) inputRef.current.value = ''
    }, [searchText])

    return (
        <form onSubmit={(event => {
            event.preventDefault()
            if (inputRef.current) {
                setSearchText(inputRef.current.value)
                navigate('/')
            }
        })}>
            <InputGroup startElement={<BsSearch/>}>
                <Input ref={inputRef} borderRadius={20} placeholder='Search games...' variant='subtle'/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;
