import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md";
  
  const variants = {
    primary: "bg-up-gold text-up-primary hover:bg-up-goldDark shadow-lg shadow-up-gold/20",
    outline: "border border-up-gold text-up-gold hover:bg-up-gold hover:text-up-primary",
    white: "bg-white text-up-primary hover:bg-up-offWhite shadow-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
};