import { useState } from 'react';
import ChatRoom from './ChatRoom';
import ChatSummary from './ChatSummary';

function ChatRoomList() {
  const [users, setUsers] = useState({
    id: 'temp',
    name: '알 수 없음',
    role: 'GUEST',
  });

  const updateUsers = () => {
    setUsers({
      id: 'Gby5LfLcaLXoqBSMP9aubbynNdnOem26DTiCETf0Gt8=',
      name: '박하늘',
      role: 'GUEST',
    });
  };

  return (
    <div>
      <h3>ChatRoomList</h3>
      <ChatSummary />
      <ChatRoom users={users} />
    </div>
  );
}

export default ChatRoomList;
