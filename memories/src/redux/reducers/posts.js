//reducer is equal to a function more specifically it is equal to a function that accepts the state
//and also it accepts the action then based on the action type so if
//action.type is equal to let's say create
//then we want to do some logic here more specifically we want to return either
//action or we want to return the state changed by the action

import { FETCH_ALL, CREATE,UPDATE,DELETE,LIKE,FETCH_BY_SEARCH,FETCH_POST} from '../constants/actionTypes';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (state = { isLoading: true, posts: [] }, action) => {
    
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };

        case 'END_LOADING':
            return { ...state, isLoading: false };

        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
              };

        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload.data };

        case FETCH_POST:
            return { ...state, post: action.payload.post };
            
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };

        case UPDATE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };

        case DELETE:
            //we're going to filter out the one that we deleted and that's going to look like this if the post that underscore id
            //is not equal to the action.payload in that case we're going to remove it so
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        
        case LIKE:
            //so first we map over the posts we check what is the one post that changed or what is the one
            //post that was liked return the post with a change or if the post is not liked then just return the post
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
   
        default:
            return state;
    }
}