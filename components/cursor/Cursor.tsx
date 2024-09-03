type Props = {
    color: string;
    x: number;
    y: number;
    message: string;
}
import CursorSVG from '@/public/assets/CursorSVG';
import React from 'react'
// passes cursor info as prop
const Cursor = ({color, x, y, message}: Props) => {
  return (
    // uses 'transform property to conitnously adjust postion live us varibles 'x' and 'y'
    <div className="pointer-events-none absolute top-0 left-0" style={{transform:`translateX(${x}px) translateY(${y}px)`}}>
        <CursorSVG color={color}/>
        {/*message */}
    </div>
  )
}

export default Cursor
