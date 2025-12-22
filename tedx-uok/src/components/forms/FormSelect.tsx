import React, { useState } from 'react';

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: 'border-color 0.3s ease',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: getBorderColor(),
          backgroundColor: '#0E0E0E',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          width: '100%',
          color: value ?  '#FFFFFF' : '#6B7280',
          outline:  'none',
          cursor: 'pointer',
          letterSpacing: '0',
        }}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        <option value="" style={{ backgroundColor: '#0E0E0E', color: '#6B7280' }}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            style={{ backgroundColor: '#0E0E0E', color: '#FFFFFF' }}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="text-sm mt-1" style={{ color: '#EB0028', letterSpacing: '0', textAlign: 'left' }}>
          {error}
        </p>
      )}
    </div>
  );
};