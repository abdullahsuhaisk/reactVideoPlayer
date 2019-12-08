import React from 'react'
import Scaler from './Scaler';

export const OverlayScreen: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      color: 'white',
      height: '100%',
      alignItems: 'center',
      alignContent: 'center'
    }}>
      <div className="box" style={{
        width: "300px",
        height: "300px",
        backgroundColor: "yellow"
      }}>

      </div>
    </div>
  )
}
