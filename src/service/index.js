//提前封装数据请求。
import axios from 'axios'
import { checkTokenUrl,identityUrl} from './url'

export function checkTokenReq () {
   return axios.get(checkTokenUrl)
}

export function identityReq () {
  return axios.post(identityUrl)
}