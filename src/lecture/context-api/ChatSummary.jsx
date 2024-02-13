import { func } from 'prop-types';
import { memo } from 'react';

function ChatSummary({ onUpdate }) {
  return (
    <div className="flex flex-col gap-5 p-5 bg-slate-200">
      <h3>ChatSummary</h3>
      <button
        type="button"
        className="p-2 text-sm border rounded-md border-slate-400 text-slate-700"
        onClick={onUpdate}
      >
        사용자 정보 변경
      </button>
    </div>
  );
}

ChatSummary.propTypes = {
  onUpdate: func,
};

export default memo(ChatSummary);
