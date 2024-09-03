import { CursorChatProps, CursorMode } from '@/types/type'
import CursorSVG from '@/public/assets/CursorSVG'
//{cursorState.mode === CursorMode.Chat && (
//)};
const CursorChat = ( {cursor, cursorState, setCursorState, updateMyPresence}:
 CursorChatProps) => {
  return (
    <div className="absolute top-0 left-0" style={{transform:`translateX(${cursor.x}px) translateY(${cursor.y}px)`}}>
   
        <>
        
          <CursorSVG color="#000" /> 
          <div className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]">
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )} 
            <input
            className="z-10 w-60">
            </input>
          </div> 
        </> // above positions message to x and y position while styling the message 
       
        
    </div>
  )
}

export default CursorChat;
