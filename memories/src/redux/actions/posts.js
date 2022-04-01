//we have to use redux thunk redux thunk allows us to in here specify an additional arrow function
// redux thunk since we'll be dealing with asynchronous logic we have to add this async dispatch function in
//front of it and then instead of returning the action we have to dispatch it 

import * as api from '../../api/index.js';
import { FETCH_ALL,CREATE,UPDATE,DELETE,LIKE,FETCH_BY_SEARCH,END_LOADING ,START_LOADING} from '../constants/actionTypes';


//error function which then returns another error function with a dispatch right there that comes from redux thunk
  export const getPosts = (page) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
       //first getting the response from the api 
      const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);
   //redux to actually pass or dispatch an action from the data from our back end
      dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

  
  export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
  
      dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };


  //error function which then returns another error function with a dispatch right there that comes from redux thunk
  export const createPost = (post) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.createPost(post);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  