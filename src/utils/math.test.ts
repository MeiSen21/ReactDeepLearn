import { describe, it, expect } from 'vitest'

// 被测试的函数
export function add(a: number, b: number): number {
  return a + b
}

export function multiply(a: number, b: number): number {
  return a * b
}

// 测试套件
describe('数学函数', () => {
  describe('add 函数', () => {
    it('应该正确相加两个正数', () => {
      expect(add(1, 2)).toBe(3)
      expect(add(10, 20)).toBe(30)
    })

    it('应该正确处理负数', () => {
      expect(add(-1, 1)).toBe(0)
      expect(add(-5, -3)).toBe(-8)
    })

    it('应该正确处理零', () => {
      expect(add(0, 5)).toBe(5)
      expect(add(0, 0)).toBe(0)
    })
  })

  describe('multiply 函数', () => {
    it('应该正确相乘', () => {
      expect(multiply(2, 3)).toBe(6)
      expect(multiply(10, 0)).toBe(0)
    })
  })
})
