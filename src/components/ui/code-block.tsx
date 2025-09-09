interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
  className?: string;
}

export function CodeBlock({ children, language, title, className = "" }: CodeBlockProps) {
  return (
    <div className={`my-6 ${className}`}>
      {title && (
        <div className="bg-gray-700 text-gray-200 px-4 py-2 text-sm font-semibold rounded-t-lg border-b border-gray-600">
          {title}
        </div>
      )}
      <pre className={`bg-gray-900 text-gray-100 ${title ? 'rounded-t-none' : ''} rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed`}>
        <code className={language ? `language-${language}` : ''}>
          {children}
        </code>
      </pre>
    </div>
  );
}

// 인라인 코드용 컴포넌트
export function InlineCode({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={`bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm font-mono ${className}`}>
      {children}
    </code>
  );
}