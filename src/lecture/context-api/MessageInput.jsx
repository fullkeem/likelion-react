import { func } from 'prop-types';
import { useRef } from 'react';

function MessageInput({ onSend }) {
  const inputRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    if (message.trim().length > 0) {
      onSend?.(message);
    } else {
      const inputElement = inputRef.current;
      inputElement.value = '';
      inputElement.focus();
    }
  };

  return (
    <div>
      <h3>MessageInput</h3>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          name="message"
          aria-label="채팅 메시지"
          placeholder="친구야 보고싶다!"
          className="p-2 my-2 border border-slate-300"
        />
        <button type="submit" className="p-2 border border-slate-400">
          보내기
        </button>
      </form>
    </div>
  );
}

MessageInput.propTypes = {
  onSend: func,
};

export default MessageInput;
