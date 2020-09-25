import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/login/',
    method: 'post',
    data
  })
}

export function refreshtoken(data) {
  return request({
    url: '/refreshtoken',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: {token}
  })
}

export function logout() {
  return request({
    url: '/api/v1/logout',
    method: 'post'
  })
}

