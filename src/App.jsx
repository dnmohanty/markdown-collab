import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [doc, setDoc] = useState("# Welcome to the Editor!\n\nStart typing on the left to see the live preview on the right...\n\n* **Bold text** works\n* _Italic text_ works\n\n### Enjoy the live preview!");

  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Real-Time Markdown Editor</h1>
      
      {/* 2-Column Grid Layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
        <Editor value={doc} onChange={setDoc} />
        <Preview doc={doc} />
      </div>
    </div>
  )
}

export default App