import axios from 'axios';
const composeToken = (token) =>  token ?{Authorization: `Bearer ${token}`} : {};

const api = (url, method,body = {}, token  = '' ) => axios({
    method,
    url: `http://localhost:3000/api${url}`,
    data: body,
    headers: {
       ...composeToken(token)
   		// 'authorization': `Bearer ${token}`
    }
});

export default api;