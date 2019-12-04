import React from 'react';
import { Player } from './Player';
import { OverlayPortal } from './components/OverlayPortal';


const App: React.FC = () => {
  return (
    <div className="App" style={{ width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: '#f3f3f3', position: 'relative' }}>
      <Player />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        backgroundColor: 'white'
      }}>
        Abc
  
      </div>

    </div>
  );
}

export default App;
