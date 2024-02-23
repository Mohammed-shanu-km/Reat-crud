import axios from 'axios';
import { Baseurl } from './Consttants/Constent';

const myAxiosInstance = axios.create({
    baseURL:Baseurl , // Set the base URL for all requests
   
    
  });
  export default myAxiosInstance
