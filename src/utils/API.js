
import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&apikey=AIzaSyC50jasZIMiI90vIhXUrCmR3piz8PaXyCI";


const getBook = (query) => {

  console.log(query)
        
        return axios.get(URL + query + APIKEY);
}

const API = {
  getBook
}
    
export default API;

