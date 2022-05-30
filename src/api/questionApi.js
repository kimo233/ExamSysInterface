import request from '@/utils/request'

// {
//     "audioURL": "string",
//     "correctAnswer": "string",
//     "description": "string",
//     "id": 0,
//     "pictureURL": "string",
//     "score": 0,
//     "subject": "string",
//     "type": "string"
//   }
export function qusetionUpload(DTO,token) {
    return request({
      url: '/qusetion/addQusetion/',
      method: 'post',
      headers:{
          "token" : token
        }
    })
  }
    export function QusetionDeleteById(id,token) {
      return request({
        url: '/qusetion/deleteQusetion/'+id,
        method: 'delete',
        headers:{
          "token" : token
        }
      })
    }
  
    export function qusetionGetInfo(id , token) {
      return request({
        url: '/qusetion/findQusetion/' + id,
        method: 'get',
        headers:{
          "token" : token
        }
      })
    }
    
  export function GetAllQusetionInfo(token) {
      return request({
        url: '/qusetion/findQusetions/' ,
        method: 'get',
        headers:{
          "token" : token
        }
      })
    }
  
   
    export function QusetionInfoUpdate(DTO,token) {
      return request({
        url: '/qusetion/updateQusetion/',
        method: 'put',
        headers:{
          "token" : token
        }
      })
    }