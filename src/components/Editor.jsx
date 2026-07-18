import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';

export default function Editor({ value, onChange }) {
  return (
    <div className="w-full h-full shadow-2xl overflow-hidden rounded-lg border border-gray-700">
      <CodeMirror
        value={value}
        height="100%"
        theme={oneDark}
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
        onChange={onChange}
        className="text-lg h-full"
      />
    </div>
  );
}