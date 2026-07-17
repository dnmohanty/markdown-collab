import { useState } from 'react';
import Editor from './components/Editor';

function App() {
  const [markdownText, setMarkdownText] = useState("# Welcome to your Markdown Editor\n\nStart typing here...");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Real-Time Markdown Editor</h1>
      
      <div className="w-full max-w-4xl">
        <Editor value={markdownText} onChange={setMarkdownText} />
      </div>
    </div>
  )
}

export default App