//reducer is equal to a function more specifically it is equal to a function that accepts the state
//and also it accepts the action then based on the action type so if
//action.type is equal to let's say create
//then we want to do some logic here more specifically we want to return either
//action or we want to return the state changed by the action

import { FETCH_ALL, CREATE } from '../constants/actionTypes';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (posts = [], action) => {
    
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}