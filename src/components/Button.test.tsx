import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'

// 简单的 Button 组件
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      style={{ 
        padding: '10px 20px', 
        background: disabled ? '#ccc' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {children}
    </button>
  )
}

// 测试
describe('Button 组件', () => {
  it('应该正确渲染按钮文字', () => {
    render(<Button>点击我</Button>)
    expect(screen.getByText('点击我')).toBeInTheDocument()
  })

  it('点击时应该触发 onClick', () => {
    const handleClick = vi.fn()  // 创建模拟函数
    render(<Button onClick={handleClick}>点击</Button>)
    
    fireEvent.click(screen.getByText('点击'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disabled 时应该不能点击', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} disabled>禁用</Button>)
    
    const button = screen.getByText('禁用')
    expect(button).toBeDisabled()
    
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
})
