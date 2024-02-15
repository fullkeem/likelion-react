import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { FormInput } from '@/components';
import { useRef, useReducer } from 'react';
import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  SELECT_EDIT_MESSAGE,
  INIT_MESSAGES_INFO as initialMessages,
  manageMessages as messageReducer,
} from '@/store/messages';

export function Component() {
  const addInputRef = useRef(null);
  const editInputRef = useRef(null);

  const [messageState, dispatch] = useReducer(messageReducer, initialMessages);

  const handleAddMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newMessage = formData.get('add-message');

    if (newMessage.trim().length === 0) {
      // addInputRef.current.select();
      alert('추가할 메시지를 올바르게 입력하세요');
      addInputRef.current.value = '';
      addInputRef.current.focus();
      return;
    }

    const addAction = {
      type: CREATE_MESSAGE,
      payload: newMessage,
    };

    dispatch(addAction);

    const input = addInputRef.current;
    input.value = '';
    input.focus();
  };

  const handleDeleteMessage = (deleteId) => () => {
    const deleteAction = {
      type: DELETE_MESSAGE,
      payload: deleteId,
    };

    dispatch(deleteAction);
  };

  const handleEditMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const editMessage = formData.get('edit-message');

    if (editMessage.trim().length === 0) {
      alert('수정할 메시지를 올바르게 입력하세요');
      editInputRef.current.value = '';
      editInputRef.current.focus();
      return;
    }

    const editedMessage = {
      ...messageState.editMessage,
      text: editMessage,
    };

    dispatch({
      type: EDIT_MESSAGE,
      payload: editedMessage,
    });

    editInputRef.current.value = '';
  };

  const handleSelectMessage = (selectId) => () => {
    const selectedMessage = messageState.messages.find(
      (m) => m.id === selectId
    );

    dispatch({
      type: SELECT_EDIT_MESSAGE,
      payload: selectedMessage,
    });

    editInputRef.current.value = selectedMessage.text;
    editInputRef.current.focus();
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('리듀서 활용! 리덕스처럼!!!!')}</title>
        <meta
          name="description"
          content="리듀서를 사용해 복잡한 상태를 관리할 수 있습니다."
        />
      </Helmet>
      <h2 className="my-5">리듀서 함수를 활용해 복잡한 상태 관리</h2>

      <div className="flex flex-col space-y-2">
        <form className="flex gap-5" onSubmit={handleAddMessage}>
          <FormInput
            ref={addInputRef}
            name="add-message"
            label="메시지 추가"
            hiddenLabel
          >
            메시지 추가
          </FormInput>
          <button type="submit">추가</button>
        </form>
        <form className="flex gap-5" onSubmit={handleEditMessage}>
          <FormInput
            ref={editInputRef}
            name="edit-message"
            label="메시지 수정"
            hiddenLabel
          >
            메시지 수정
          </FormInput>
          <button type="submit">수정</button>
        </form>
      </div>

      <ul className="my-5">
        {messageState.messages.map(({ id, text }) => (
          <li key={id} className="flex gap-x-4">
            {text}
            <div className="flex space-x-1">
              <button type="button" onClick={handleSelectMessage(id)}>
                ✏️
              </button>
              <button type="button" onClick={handleDeleteMessage(id)}>
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

Component.displayName = 'LearnReducerPage';