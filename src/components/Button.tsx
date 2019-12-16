import React from 'react';
import './Button.css';

export enum ButtonTypes {
  Light = 'light',
  Dark = 'dark',
  Primary = 'primary'
}

interface IButtonProps {
  Label: string;
  Type: ButtonTypes;
  handleClick: (label: string) => void
}

const Button: React.FC<IButtonProps> = ({Label, Type, handleClick}) => {
  return (
    <div className={`Button Button--${Type}`} onClick={handleClick.bind(null, Label)}>
      {Label}
    </div>
  );
}

export default Button;
