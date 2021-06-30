import {connect} from "react-redux";

const SongDetail = ({selectedSong}) => {
    if(selectedSong)
        return(
            <div key={selectedSong.title}>
                <h3>{selectedSong.title}</h3>
                <h3>{selectedSong.duration}</h3>
            </div>
        );
    else
        return null;
    
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        selectedSong : state.songSelected,
    }
}

export default connect(mapStateToProps)(SongDetail);