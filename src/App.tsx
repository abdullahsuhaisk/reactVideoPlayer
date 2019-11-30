import React from 'react';
import { Player } from './Player';
import { OverlayPortal } from './components/OverlayPortal';


const App: React.FC = () => {
  return (
    <div className="App" style={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#f3f3f3', position: 'relative' }}>
      <Player />
      <OverlayPortal>
        Abc
      </OverlayPortal>
    </div>
  );
}

export default App;
