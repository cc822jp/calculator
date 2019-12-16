import React from 'react'
import './Display.css'

interface IButtonProps {
  Computation?: string
  Result?: string
}

const Display: React.FC<IButtonProps> = ({ Computation, Result }) => {
  return (
    <div className="Display">
      <div className="Display__Computation">{Computation}</div>
      <div className="Display__Result">{Result}</div>
    </div>
  )
}

export default Display
