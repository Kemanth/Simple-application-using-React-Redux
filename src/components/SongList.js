import {connect} from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
    const songListItems = props.songs;
    return songListItems.map((songListItem)=>{
        return(
            <div key={songListItem.title}>
                <h3>{songListItem.title}</h3>
                <button onClick = {()=>props.selectSong(songListItem)}>Select</button>
            </div>
        );
    })
}

const mapStateToProps = (state) => {
    return {
        songs : state.songs,
    }
}

export default connect(mapStateToProps, {selectSong})(SongList);