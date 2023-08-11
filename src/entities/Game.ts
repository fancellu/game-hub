import {Platform} from "./Platform.ts";
import {Genre} from "./Genre.ts";
import {Publisher} from "./Publisher.ts";

export interface Game {
    id: number,
    name: string,
    background_image: string;
    parent_platforms: { platform: Platform } [],
    metacritic: number,
    rating_top: number,
    description_raw: string,
    slug: string,
    genres: Genre[],
    publishers: Publisher[]
}