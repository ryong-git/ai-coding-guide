import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  sectionNumber?: string;
  className?: string;
}

export function PageTitle({ children, subtitle, sectionNumber, className = "" }: PageTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {sectionNumber && (
        <div className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
          {sectionNumber}
        </div>
      )}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        {children}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6 leading-tight ${className}`}>
      {children}
    </h2>
  );
}

export function SubsectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 leading-tight ${className}`}>
      {children}
    </h3>
  );
}

export function MinorTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={`text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3 leading-tight ${className}`}>
      {children}
    </h4>
  );
}

// 특별한 스타일의 제목들
export function FeatureTitle({ children, icon, className = "" }: { children: React.ReactNode; icon?: string; className?: string }) {
  return (
    <h3 className={`text-xl font-bold text-blue-700 dark:text-blue-300 mt-8 mb-4 leading-tight ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </h3>
  );
}

export function NumberedTitle({ children, number, className = "" }: { children: React.ReactNode; number: number; className?: string }) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 leading-tight flex items-center ${className}`}>
      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
        {number}
      </span>
      {children}
    </h3>
  );
}

// 텍스트 스타일 컴포넌트들
export function Lead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function Paragraph({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-gray-700 dark:text-gray-300 mb-4 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function SmallText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}