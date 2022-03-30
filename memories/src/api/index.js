import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5020' });

//api dot interceptors and dot request this is going to be a function that's going to happen on each one of our requests so in here
// we can say dot use and then you provide a callback function that callback function gets a request as the first parameter so again this is going to happen before
//all of these others requests so why do we need this because we have to send our token back to our backend so
//that the backend middleware can verify 

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);