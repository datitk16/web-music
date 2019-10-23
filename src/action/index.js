import * as Type from './../constants/actionTypes';

import callApiSong from './../utils/callApiSong';

export const actSearchSong = (nameofSong) => {

    return dispatch => {

        return callApiSong(`${nameofSong}`, 'GET', null).then(res => {
            
            console.log(res.data)
            dispatch(searchSong(res.data))
        })
    }
}
export const searchSong = (song) => {
    return {
        type: Type.SEARCH_SONG,
        song
        
    }
}