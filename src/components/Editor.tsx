import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { yCollab } from 'y-codemirror.next';
import Toolbar from './Toolbar';

interface EditorProps {
  onChange: (value: string) => void;
  value?: string;
}

export default function Editor({ onChange, value }: EditorProps) {
  const [extensions, setExtensions] = useState<any[]>([]);
  const [sharedText, setSharedText] = useState<Y.Text | null>(null);

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

  const handleInsert = (syntax: string, type: string) => {
    if (!sharedText) return;

    const currentLength = sharedText.toString().length;
    const currentText = value || "";
    let textToInsert = "";

    if (type === 'wrap') {
      textToInsert = `${syntax}text${syntax}`;
    } else if (type === 'start') {
      const prefix = currentText.length === 0 ? "" : "\n";
      textToInsert = `${prefix}${syntax}`;
    }

    sharedText.insert(currentLength, textToInsert);
  };

  return (
    <div className="w-full h-full flex flex-col shadow-2xl overflow-hidden rounded-lg border border-gray-700">
      <Toolbar onInsert={handleInsert} />
      
      <div className="flex-1 overflow-hidden">
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