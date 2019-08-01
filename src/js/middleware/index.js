import { ADD_ARTICLE } from '../constants/action-types';
import { foundBadWord } from '../actions/index';

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            //do stuff

            if (action.type === ADD_ARTICLE) {
                //check if action.payload.title contains bad word
                const foundWord = forbiddenWords.filter(word => 
                    action.payload.title.includes(word)
                );
                
                //if it does, then dispatch an action of type "FOUND_BAD_WORD"
                if(foundWord.length) {
                    // return dispatch({type: "FOUND_BAD_WORD"});
                    return dispatch(foundBadWord(foundWord));
                }
            }

            //otherwise let the next action pass
            return next(action);
        }
    }
}