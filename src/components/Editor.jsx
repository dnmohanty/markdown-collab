import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { yCollab } from 'y-codemirror.next';

export default function Editor({ onChange }) {
  const [extensions, setExtensions] = useState([]);
  const [sharedText, setSharedText] = useState(null);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const ytext = ydoc.getText('codemirror');
    setSharedText(ytext);

    const provider = new WebsocketProvider(
      'wss://demos.yjs.dev/ws',
      'my-unique-collab-room-123',
      ydoc
    );

    ytext.observe(() => {
      onChange(ytext.toString());
    });

    const yCollabExtension = yCollab(ytext, provider.awareness);
    setExtensions([
      markdown({ base: markdownLanguage, codeLanguages: languages }),
      yCollabExtension
    ]);

    return () => {
      provider.disconnect();
      ydoc.destroy();
    };
  }, [onChange]);

  const handleInsert = (syntax, type) => {
    if (!sharedText) return;

    const currentLength = sharedText.toString().length;
    let textToInsert = "";

    if (type === 'wrap') {
      textToInsert = `${syntax}text${syntax}`;
    } else if (type === 'start') {
      const prefix = currentLength === 0 ? "" : "\n";
      textToInsert = `${prefix}${syntax}`;
    }

    sharedText.insert(currentLength, textToInsert);
  };

  return (
    <div className="w-full h-full flex flex-col shadow-2xl overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
      <div className="flex bg-gray-800 p-2 gap-2 border-b border-gray-700">
        <button onClick={() => handleInsert('**', 'wrap')} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold text-white">B</button>
        <button onClick={() => handleInsert('*', 'wrap')} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm italic text-white">I</button>
        <button onClick={() => handleInsert('# ', 'start')} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold text-white">H1</button>
        <button onClick={() => handleInsert('## ', 'start')} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold text-white">H2</button>
        <button onClick={() => handleInsert('- ', 'start')} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-white">List</button>
        <button onClick={() => handleInsert('`', 'wrap')} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm font-mono text-white">Code</button>
      </div>
      <div className="flex-1 overflow-auto">
        <CodeMirror
          height="100%"
          theme={oneDark}
          extensions={extensions}
          className="text-lg h-full"
        />
      </div>
    </div>
  );
}