import { takeEvery, call, put } from 'redux-saga/effects';

export default function* watcherSaga() {
    //take every action named DATA_REQUEST and for each action of that type spin a worker saga
    yield takeEvery('DATA_REQUESTED', workerSaga);
}

function* workerSaga() {
    try {
        //call a function named getData
        const payload = yield call(getData);
        //if the function does not result in any error then dispatch (put) a new action named DATA_LOADED, alongside with a payload
        yield put({ type: 'DATA_LOADED', payload});
    } catch (e) {
        //if the function results in an error then dispatch (put) a new action named API_ERRORED, alongside with a payload(the error)
        yield put({ type: 'API_ERRORED', payload: e});
    }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json());
}