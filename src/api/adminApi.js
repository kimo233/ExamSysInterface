import request from '@/utils/request'

export function adminLogin(id,password) {
  return request({
    url: '/login/AdminLogin/'+id+'/'+password,
    method: 'get'
  })
}

export function adminGetInfo(id , token) {
  return request({
    url: '/admin/findAdmin/' + id,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}