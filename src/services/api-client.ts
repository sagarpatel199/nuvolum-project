import axios, {CanceledError} from "axios";
export default axios.create({
    baseURL:"https://fakestoreapi.com/products/"
    // headers:{
    //     'api-key':
    // } If I have any headers I would put them here

})

export {CanceledError};

