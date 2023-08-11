import React from 'react';
import {useParams} from "react-router-dom";

const GameDetailPage = () => {
    const params = useParams()

    console.log("GameDetailPage " + params.toString())
    return (
        <div>
            {params.id}
        </div>
    );
};

export default GameDetailPage;
