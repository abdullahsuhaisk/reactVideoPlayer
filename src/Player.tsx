import React from "react";
import ReactPlayer from 'react-player'

export const Player: React.FC = () => {
  return (
    <div className="player" style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <div className="player-overlay"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: 'yellow'
        }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=4V7oq8KtDsA' playing controls={true} className="videoPlayer" />
      </div>

    </div>
  )

};
