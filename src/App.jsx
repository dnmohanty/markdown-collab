import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [doc, setDoc] = useState("");

  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Real-Time Markdown Editor</h1>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
        <Editor onChange={setDoc} />
        <Preview doc={doc} />
      </div>
    </div>
  )
}

export default App