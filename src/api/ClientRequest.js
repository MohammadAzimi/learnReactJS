import axios from "axios";


const BASE_URL = "domain.com";

const logStyle = 'color:#F00;font-size:16px';

//TODO: set header and authorization
const requestHttp = ({method = 'get', url, data, ...options}) => {
    axios({
        method,
        url,
        data,
        ...options,
      })
      .then(response => {
        console.log(`%chttp request ${method} response`, logStyle, response.data);
        return {result: response.data, ok: true};
      })
      .catch(e=>{        
        return errorHandler(e);
      });
}

const getRequest = options => {
    return requestHttp({method: 'get', ...options});
}

const postRequest = options => {
    return requestHttp({method: 'post', ...options});
}

const errorHandler = error => {
    // TODO: 401 and unAuthorized request should be handled
    console.log(`%chttp request error`, logStyle, error);
    return  {result: error, notOk: true}
}

export {getRequest, postRequest};