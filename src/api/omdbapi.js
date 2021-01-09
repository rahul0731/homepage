import axios from "axios";

// const KEY = '5178c7ef';

export default axios.create({
    baseURL : 'http://www.omdbapi.com/',
    headers : {
        Authorization : 'apikey=5178c7ef'
    }
})