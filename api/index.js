
import request from '@/config/request.js' 
 
export function login(data){ // 模拟登录
	return request({
	    url: '',
		method: 'get',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 })
}