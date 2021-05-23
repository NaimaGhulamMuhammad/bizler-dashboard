import Data from "../../api/blogs"
import React from "react"

export default (state=Data, action) => {
    switch(action.type) {
        case "Fetch_All":
            return action.payload;
        case "CREATE":
            return [...state, action.payload];     
        case "DELETE":
            return [...state, action.payload];                   
        default:
            return state;
    }
}
