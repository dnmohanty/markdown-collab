import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';

export default function Editor() {
  const initialDoc = "# Welcome to your Markdown Editor\n\nStart typing here...";

  return (
    <div className="w-full shadow-2xl overflow-hidden rounded-lg border border-gray-700">
      <CodeMirror
        value={initialDoc}
        height="500px"
        theme={oneDark}
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
        className="text-lg"
      />
    </div>
  );
}