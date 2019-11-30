import React, { useRef, useEffect, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import { throttle } from 'lodash';

const aspectRatio = 1.777;
const modalRoot = document.getElementsByClassName('player-overlay')[0] as HTMLDivElement;
console.log(modalRoot);

export const OverlayPortal: React.FC<{ children: any }> = ({ children }) => {
  const [root, setRoot] = useState();

  useEffect(() => {
    setRoot(document && document.getElementsByClassName('player-overlay')[0] as HTMLDivElement)

  }, [])

  const containerRef = useRef<HTMLDivElement>(null);
  // Set The Context Api
  if (root) {
    console.log(root);
    return ReactDOM.createPortal(
      <div
        ref={containerRef}
        className="overlay-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
        {children}
      </div>
      , root)
  }
  else return null
}
