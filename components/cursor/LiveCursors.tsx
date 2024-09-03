import { COLORS } from '@/constants';
import { LiveCursorProps } from '@/types/type';
import Cursor from './Cursor';
const LiveCursors = ({ others }: LiveCursorProps) => {
    // We are mapping all the other cursors using their connectionid 
    // and presense (which contains info about colour, message and x/y postion)
  return others.map(({ connectionId, presence}) => {
    // "?.cursor" makes it so cursor is only shown if it exists
    if(!presence?.cursor) return null;

    return (
        // Properties to pass to show 'other' cursors
        <Cursor
            key={connectionId}
            color={COLORS[Number(connectionId) % COLORS.length]}
            x={presence.cursor.x}
            y={presence.cursor.y}
            message={presence.message}
        />
    )
  })
}

export default LiveCursors
