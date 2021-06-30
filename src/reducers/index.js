import { combineReducers } from "redux";

const songReducer = () =>{
    return [
        {title : 'Music 1', duration : '3 mins'},
        {title : 'Music 2', duration : '5 mins'},
        {title : 'Music 3', duration : '6 mins'},
        {title : 'Music 4', duration : '7 mins'},
        {title : 'Music 5', duration : '8 mins'},
    ]
}

const songSelectedReducer = (songSelected = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        songSelected = action.payload;
    }
    return songSelected;
}

export default combineReducers({
    songs : songReducer,
    songSelected : songSelectedReducer,
});