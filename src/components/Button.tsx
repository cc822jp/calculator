import React from 'react'
import './Button.css'

export enum ButtonTypes {
  Light = 'light',
  Dark = 'dark',
  Primary = 'primary'
}

interface IButtonProps {
  label: string
  value: string
  type: ButtonTypes
  onClick: (label: string, value: string) => void
}

const Button: React.FC<IButtonProps> = ({ label, value, type, onClick }) => {
  return (
    <div
      className={`Button Button--${type}`}
      onClick={onClick.bind(null, label, value)}
    >
      {label}
    </div>
  )
}

export default Button
