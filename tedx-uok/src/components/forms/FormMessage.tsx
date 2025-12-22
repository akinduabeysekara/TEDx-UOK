import React from 'react';

interface FormMessageProps {
  type:  'success' | 'error';
  message: string;
  onClose?: () => void;
}

export const FormMessage: React. FC<FormMessageProps> = ({
  type,
  message,
  onClose,
}) => {
  const isSuccess = type === 'success';

  return (
    <div
      className="p-4 rounded-lg border"
      style={{
        backgroundColor:  isSuccess ? 'rgba(34, 197, 94, 0.1)' : 'rgba(235, 0, 40, 0.1)',
        borderColor: isSuccess ? '#22c55e' : '#EB0028',
        borderWidth: '1px',
        borderStyle:  'solid',
      }}
      role="alert"
    >
      <div className="flex items-start justify-between space-x-3">
        <div className="flex items-start space-x-3">
          {isSuccess ?  (
            <svg
              className="w-6 h-6 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="#22c55e"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="#EB0028"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <p className="text-sm" style={{ color: isSuccess ? '#22c55e' : '#EB0028', letterSpacing:  '0' }}>
            {message}
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 transition-colors"
            style={{ color: isSuccess ? '#22c55e' : '#EB0028' }}
            aria-label="Close message"
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e. currentTarget.style.opacity = '1';
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};