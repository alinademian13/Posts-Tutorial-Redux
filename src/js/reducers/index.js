import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, API_ERRORED } from "../constants/action-types";

const initialState = {
    articles: [],
    errors: "",
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        // state.articles.push(action.payload); --> impure function (it alters the original array)
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload),
            errors: ""
        });
    }
    if (action.type === FOUND_BAD_WORD) {
        console.log("error reducer");
        return Object.assign({}, state, {
            errors: `You cannot enter the word ${action.payload}`
        });
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    if(action.type === API_ERRORED) {
        return Object.assign({}, state, {
            errors: `There was an error ${action.payload}`
        });
    }

    return state;
}

export default rootReducer;