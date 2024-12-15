import React from 'react';

const variantStyles = {
  primary: 'bg-purple-500 text-white hover:bg-purple-600',
  secondary: 'bg-emerald-500 text-white hover:bg-emerald-600',
  outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-50'
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

interface ButtonProps {
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}) => {
  return (
    <button 
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        transition-all duration-300 rounded-lg
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 