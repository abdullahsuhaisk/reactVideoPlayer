import React from 'react';
import { Player } from './Player';
import { OverlayPortal } from './components/OverlayPortal';


const App: React.FC = () => {
  return (
    <div className="App" style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: '#f3f3f3', position: 'relative' }}>
      <Player />
      <OverlayPortal>
        <div style={{ color: 'red' }}>
          aaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </OverlayPortal>
    </div>
  );
}

export default App;

/*
      <div className="Overlay-Container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}>
        Abc
      </div>
*/