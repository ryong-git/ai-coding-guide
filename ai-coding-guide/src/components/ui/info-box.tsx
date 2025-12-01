import React from 'react';

type BoxType = 'info' | 'warning' | 'success' | 'error' | 'note' | 'tip';

interface InfoBoxProps {
  type: BoxType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const boxStyles: Record<BoxType, string> = {
  info: 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500',
  warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500',
  success: 'bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500',
  error: 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500',
  note: 'bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400',
  tip: 'bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500'
};

const titleStyles: Record<BoxType, string> = {
  info: 'text-blue-700 dark:text-blue-300',
  warning: 'text-yellow-700 dark:text-yellow-300',
  success: 'text-green-700 dark:text-green-300',
  error: 'text-red-700 dark:text-red-300',
  note: 'text-gray-700 dark:text-gray-300',
  tip: 'text-purple-700 dark:text-purple-300'
};

const defaultTitles: Record<BoxType, string> = {
  info: '💡 정보',
  warning: '⚠️ 주의',
  success: '✅ 성공',
  error: '❌ 오류',
  note: '📝 참고',
  tip: '🎯 팁'
};

export function InfoBox({ type, title, children, className = "" }: InfoBoxProps) {
  const displayTitle = title || defaultTitles[type];
  
  return (
    <div className={`${boxStyles[type]} p-6 my-6 rounded-r-lg shadow-sm ${className}`}>
      {displayTitle && (
        <h4 className={`text-lg font-semibold mb-3 ${titleStyles[type]}`}>
          {displayTitle}
        </h4>
      )}
      <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

// 특별한 용도의 박스 컴포넌트들
export function FeatureBox({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 p-6 my-6 rounded-lg shadow-sm ${className}`}>
      <h4 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
        {title}
      </h4>
      <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

export function HighlightBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 p-6 my-6 rounded-lg shadow-sm ${className}`}>
      <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}