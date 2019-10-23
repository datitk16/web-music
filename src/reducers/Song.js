import * as Type from './../constants/actionTypes';

let initialState = [];

const song = (state = initialState, action) => {

    switch (action.type) {
        case Type.SEARCH_SONG:
            state=action.song
            return state
        default: return state;
    }
}
export default song;