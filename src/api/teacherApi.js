import request from '@/utils/request'

export function teacherLogin(id,password) {
  return request({
    url: '/login/teacherLogin/'+id+'/'+password,
    method: 'get'
  })
}

export function teacherGetInfo(id , token) {
  return request({
    url: '/teacher/findTeacher/' + id,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}