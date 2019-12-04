import React from 'react'
import Player from '.';
import { OverlayPortal } from '../../components/OverlayPortal';

const PlayerContainer: React.FC = () => {
  return (
    <>
      <Player />
      <OverlayPortal>
        <div style={{ color: 'red' }}>
          aaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </OverlayPortal>
    </>
  )
}
export default PlayerContainer;