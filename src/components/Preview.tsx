import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PreviewProps {
  doc: string;
}

export default function Preview({ doc }: PreviewProps) {
  return (
    <div className="w-full h-full p-6 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-y-auto prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {doc}
      </ReactMarkdown>
    </div>
  );
}