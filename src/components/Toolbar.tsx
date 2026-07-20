import React from 'react';

interface ToolbarProps {
  onInsert: (syntax: string, type: string) => void;
}

export default function Toolbar({ onInsert }: ToolbarProps) {
  const tools = [
    { label: 'B', syntax: '**', type: 'wrap', tooltip: 'Bold' },
    { label: 'I', syntax: '_', type: 'wrap', tooltip: 'Italic' },
    { label: 'H1', syntax: '# ', type: 'start', tooltip: 'Heading 1' },
    { label: 'H2', syntax: '## ', type: 'start', tooltip: 'Heading 2' },
    { label: 'List', syntax: '* ', type: 'start', tooltip: 'Bullet List' },
    { label: 'Code', syntax: '`', type: 'wrap', tooltip: 'Code Block' },
  ];

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-900 border border-gray-700 rounded-t-lg border-b-0 w-full select-none">
      {tools.map((tool) => (
        <button
          key={tool.label}
          onClick={() => onInsert(tool.syntax, tool.type)}
          className="px-3 py-1 text-sm font-semibold bg-gray-800 hover:bg-purple-600 rounded text-gray-200 hover:text-white transition-colors duration-200 shadow"
          title={tool.tooltip}
        >
          {tool.label}
        </button>
      ))}
    </div>
  );
}