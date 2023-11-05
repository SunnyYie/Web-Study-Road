import cookie from 'react-cookies'

export function useMyToken() {
  // 获取token
  function getToken() {
    return cookie.load('admin-token')
  }

  // 设置token
  function setToken(token) {
    cookie.save('admin-token', token, { path: '/' })
  }

  // 清除cookie
  function removeToken() {
    cookie.remove('admin-token')
  }
  return {
    getToken,
    setToken,
    removeToken,
  }
}
