import { describe, it, expect, vi } from 'vitest'

// 模拟 API 函数
interface User {
  id: number
  name: string
  email: string
}

export async function fetchUser(id: number): Promise<User> {
  // 实际项目中这里是 fetch('/api/user/' + id)
  const response = await fetch(`/api/user/${id}`)
  if (!response.ok) {
    throw new Error('用户不存在')
  }
  return response.json()
}

// 测试
describe('API 函数', () => {
  describe('fetchUser', () => {
    it('应该成功获取用户信息', async () => {
      // 模拟 fetch
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 1, name: '张三', email: 'zhangsan@example.com' })
      })

      const user = await fetchUser(1)
      
      expect(user).toEqual({
        id: 1,
        name: '张三',
        email: 'zhangsan@example.com'
      })
      expect(fetch).toHaveBeenCalledWith('/api/user/1')
    })

    it('用户不存在时应该抛出错误', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false
      })

      // 断言会抛出错误
      await expect(fetchUser(999)).rejects.toThrow('用户不存在')
    })
  })
})
