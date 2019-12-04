import React from "react";
import ReactPlayer from 'react-player'

const Player: React.FC = () => {
  return (
    <div className="player" style={{
      position: 'absolute',
      top: '0',
      left: '0'
    }}>
      <ReactPlayer url='https://www.youtube.com/watch?v=iqNj5P3Ik4U&list=PLF8rWJLgnTffDHqCUDrc9MVO9SF6Ovjze&index=20' playing controls={true} className="videoPlayer" />
    </div>
  )
};

export default Player;