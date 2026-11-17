import {Button, Menu, Portal} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "../store.ts";


const SortSelector = () => {
    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"},
    ];

    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
    const setSortOrder = useGameQueryStore(s => s.setSortOrder)

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant='subtle'>Order by: {currentSortOrder?.label || 'Relevance'} <BsChevronDown/></Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortOrders.map(order =>
                            <Menu.Item key={order.value} value={order.value || 'relevance'}
                                       onSelect={() => setSortOrder(order.value)}>
                                {order.label}
                            </Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortSelector;
