import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({play}) => {
  return (
    <div className="player">
  <AudioPlayer
    autoPlay
    src={play}
    onPlay={e => console.log("onPlay")}
    // other props here
  />

    </div>
  )
}

export default Player