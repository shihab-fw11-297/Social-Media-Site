//we have to use redux thunk redux thunk allows us to in here specify an additional arrow function
// redux thunk since we'll be dealing with asynchronous logic we have to add this async dispatch function in
//front of it and then instead of returning the action we have to dispatch it 

import * as api from '../../api/index.js';
import { FETCH_ALL,CREATE,UPDATE,DELETE,LIKE } from '../constants/actionTypes';


 //error function which then returns another error function with a dispatch right there that comes from redux thunk
export const getPosts = () => async (dispatch) => {
    try {
        //first getting the response from the api 
      const { data } = await api.fetchPosts();
        //redux to actually pass or dispatch an action from the data from our back end
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  //error function which then returns another error function with a dispatch right there that comes from redux thunk
  export const createPost = (post) => async (dispatch) => {
    try {
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
      console.log(error.message);
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
  