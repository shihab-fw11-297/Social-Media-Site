//reducer is equal to a function more specifically it is equal to a function that accepts the state
//and also it accepts the action then based on the action type so if
//action.type is equal to let's say create
//then we want to do some logic here more specifically we want to return either
//action or we want to return the state changed by the action

import { FETCH_ALL, CREATE,UPDATE,DELETE,LIKE } from '../constants/actionTypes';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (posts = [], action) => {
    
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload];

        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

        case DELETE:
            //we're going to filter out the one that we deleted and that's going to look like this if the post that underscore id
            //is not equal to the action.payload in that case we're going to remove it so
            return posts.filter((post) => post._id !== action.payload);
        
        case LIKE:
            //so first we map over the posts we check what is the one post that changed or what is the one
            //post that was liked return the post with a change or if the post is not liked then just return the post
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

        default:
            return posts;
    }
}