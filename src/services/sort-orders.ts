import {GameQuery} from "../store.ts";

export interface SortOrder {
    value: string;
    label: string;
}

export const NEW_AND_TRENDING = 'new'

export const sortOrders: SortOrder[] = [
    {value: NEW_AND_TRENDING, label: "New & trending"},
    {value: "", label: "Relevance"},
    {value: "-added", label: "Date added"},
    {value: "name", label: "Name"},
    {value: "-released", label: "Release date"},
    {value: "-metacritic", label: "Popularity"},
    {value: "-rating", label: "Average rating"},
];

// With no explicit choice, browse shows what's new; a search ranks by relevance
// (a 12-month window would hide most search hits, e.g. "portal").
export const effectiveSortOrder = ({sortOrder, searchText}: GameQuery): string =>
    sortOrder ?? (searchText ? '' : NEW_AND_TRENDING)

const isoDate = (d: Date) => d.toISOString().slice(0, 10)

// RAWG query params for a sort order value
export const sortParams = (value: string) => {
    if (value !== NEW_AND_TRENDING) return {ordering: value || undefined}
    // Released in the last 12 months, most added (by RAWG users) first
    const today = new Date()
    const yearAgo = new Date(today)
    yearAgo.setFullYear(today.getFullYear() - 1)
    return {ordering: '-added', dates: `${isoDate(yearAgo)},${isoDate(today)}`}
}
