import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import { throttle } from 'lodash';

const aspectRatio = 1.777;
const modalRoot = document.getElementsByClassName('video-overlay')[0] as HTMLDivElement;

export const OverlayPortal: React.FC<{ children: any }> = ({ children }) => {
  
  const containerRef = useRef<HTMLDivElement>(null);
  // Set The Context Api
  return ReactDOM.createPortal(
    <div
      ref={containerRef}
      className="vb--overlay-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}>
      {children}
    </div>
    , modalRoot)
}
