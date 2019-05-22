// request.js
import axios from 'axios'

console.log({axios})

const url = 'http://89.108.64.67:3000'
const key = '?key=testtesttest'

// const dbRequest = {
// 	editOrderById: (id, data, callback) => localFetch(`/order/${id}`, { method: 'PUT', body: JSON.stringify(data) }, callback),
// 	createOrder: (data, callback) => localFetch(`/order`, { method: 'POST', body: JSON.stringify(data) }, callback),
// }


const api = {
	createOrder: (id , data, callback) => axios.post(url + `/order` + key)
		.then(({data}) => callback(data)),
	getList: callback => axios.get(url + `/orders` + key)
		.then(({data}) => callback(data)),
	generate: number => axios.post(url + `/generate/${number} ` + key),
	reinit: callback => axios.post(url + `/reinit` + key).then(({data}) => callback(data)),
	deleteOrderById:(id, callback) => axios.delete(url + `/order/${id}` + key )
		.then(({data}) => callback(data)),
	getOrderById: (id, callback) =>  axios.get(url + `/order/${id}` + key)
		.then(({data}) => callback(data)),
	editOrderById: (id, data, callback) => axios.put(url + `/order/${id}`, key)
		.then(({data}) => callback(data))
}
export default api
