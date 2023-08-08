import axios from "axios";

// import process from "process";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f4ef000bfe6749038685cc5a314359e1'
    }
})