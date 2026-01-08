import { useState } from 'react';
import { sendAiCommand } from '../api/ai.api';
import './ChatInput.css';

export function ChatInput({ onResult }: { onResult: () => void }) {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!message.trim()) return;

    setLoading(true);
    const res = await sendAiCommand(message);
    setResponse(res);
    setMessage('');
    setLoading(false);
    onResult();
  }

  return (
    <div className="chat">
      <h3>AI Command</h3>

      <textarea
        placeholder='e.g. "Add a backend task to optimize DB queries by Friday"'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button onClick={submit} disabled={loading}>
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {response && (
        <pre className="ai-response">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
