import React from "react";
import ReactPlayer from 'react-player'

export const Player: React.FC = () => {
  return (
    <div className="player" style={{
      position: 'absolute',
      top: '0',
      left: '0'
    }}>
      <ReactPlayer url='https://www.youtube.com/watch?v=4V7oq8KtDsA' playing controls={true} className="videoPlayer" />
    </div>
  )

};
