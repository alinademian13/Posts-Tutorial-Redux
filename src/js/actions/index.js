import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from '../constants/action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function foundBadWord(payload) {
    return { type: FOUND_BAD_WORD, payload }
};

//async func - action that calls an API with fetch and returns a Redux action
// export function getData() {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(json => {
//             return { type: "DATA_LOADED", payload: json };
//         });
// }

//-------------WITH REDUX THUNK:
// export function getData() {
//     return function(dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(json => {
//             //call dispatch inside the async function for dispatching the action
//             dispatch({type: DATA_LOADED, payload: json}); 
//         });
//     }
// };

//-------------WITH REDUX SAGA: -> this action creator will just dispatch a plain action
export function getData() {   // where????
    return { type: 'DATA_REQUESTED' };
    //this DATA_REQUESTED action will be intercepted by Redux Saga with the takeEvery method
    //takeEvery method takes every DATA_REQUESTED action passing inside our app and
    //starting some work in response to that action
}

