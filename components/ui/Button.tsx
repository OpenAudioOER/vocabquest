import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm border-b-4";
  
  const variants = {
    primary: "bg-indigo-500 hover:bg-indigo-400 text-white border-indigo-700",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white border-slate-900",
    danger: "bg-red-500 hover:bg-red-400 text-white border-red-700",
    success: "bg-green-500 hover:bg-green-400 text-white border-green-700",
    ghost: "bg-transparent hover:bg-white/10 text-white border-transparent shadow-none"
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};