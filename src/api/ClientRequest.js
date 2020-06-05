import axios from "axios";


const BASE_URL = "domain.com";

//TODO: set header and authorization
const requestHttp = ({method = 'get', url, data, ...options}) => {
    axios({
        method,
        url,
        data,
        ...options,
      })
      .then(response => {
        return    console.log(response)
      })
      .catch(e=>{
          //
          return console.log(e);
      });
}

const getRequest = options => {
    return requestHttp({method: 'get', ...options});
}

const postRequest = options => {
    return requestHttp({method: 'post', ...options});
}

export {getRequest, postRequest};