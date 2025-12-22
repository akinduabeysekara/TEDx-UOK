import React, { useState } from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?:  string;
  value:  string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getBorderColor = () => {
    if (error) return '#EB0028';
    if (isFocused || isHovered) return '#EB0028';
    return '#1F1F1F';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="space-y-2">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-300" 
        style={{ letterSpacing: '0', textAlign: 'left' }}
      >
        {label} {required && <span style={{ color: '#EB0028' }}>*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        placeholder={placeholder}
        style={{
          transition: 'border-color 0.3s ease',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: getBorderColor(),
          backgroundColor: '#0E0E0E',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          width: '100%',
          color: '#FFFFFF',
          outline: 'none',
          letterSpacing: '0',
        }}
        required={required}
        aria-invalid={error ? 'true' :  'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="text-sm mt-1" style={{ color: '#EB0028', letterSpacing: '0', textAlign: 'left' }}>
          {error}
        </p>
      )}
    </div>
  );
};