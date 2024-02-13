import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';

function ChatRoom() {
  return (
    <div>
      <ChatRoomInfo />
      <SpeechBubble />
      <MessageInput />
    </div>
  );
}

export default ChatRoom;
