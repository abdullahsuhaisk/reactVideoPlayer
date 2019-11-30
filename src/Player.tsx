import React from "react";
import ReactPlayer from 'react-player'

export const Player: React.FC = () => {
  return (
    <div className="player">
      <ReactPlayer url='https://www.yotube.com/watch?v=4V7oq8KtDsA' playing controls={true} className="video" />
      <div className="video-overlay"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}></div>
    </div>
  )

};
