import { useMyPresence, useOthers } from "@liveblocks/react";
import LiveCursors from "./cursor/LiveCursors";
import { useCallback, useState } from "react";
import CursorChat from "./cursor/CursorChat";
import { CursorMode } from "@/types/type";
const Live = () => {
  const others = useOthers();
  const [{cursor}, updateMyPresence] = useMyPresence() as any;
  const [cursorState, setCursorState] = useState({ 
    mode: CursorMode.Hidden,
  }) // sets the state of the cursor (hidden, chatting, reactionselector or reaction)
  
  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    // subtracking x postion of cursor with actual position for more precise position
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({ cursor: { x, y}});
  }, [])

  //hides cursor when you leave screen
  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    setCursorState({mode: CursorMode.Hidden})
    updateMyPresence({ cursor:null, message: null});
  }, [])

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    // subtracking x postion of cursor with actual position for more precise position
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updateMyPresence({ cursor: { x, y}});
  }, [])
  return (
    <div
    // tracking postion of cursor
    onPointerMove={handlePointerMove}
    onPointerLeave={handlePointerLeave}
    onPointerDown={handlePointerDown}
    className="h-[100vh] w-full flex justify-center items-center text-center"
    >
       <h1 className="font-5xl text-white">UI Designer</h1>
    
      {cursor && ( 
        <CursorChat
        cursor={cursor}
        cursorState={cursorState}
        setCursorState={setCursorState}
        updateMyPresence={updateMyPresence}
      /> // Checks if cursor exists and then passes above fields
      )}
      <LiveCursors others={others}></LiveCursors>
    </div>
    // Others here refers to other cursors present
  )
}

export default Live
