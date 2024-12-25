import { useState } from 'react';
import { Input, Button } from 'antd';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ input }) });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div>
      <Input.TextArea value={input} onChange={e => setInput(e.target.value)} />
      <Button onClick={handleChat}>Ask</Button>
      <div>{response}</div>
    </div>
  );
};

export default Chatbot;
