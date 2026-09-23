import axios from "axios";
// corunt api
const Axioscliant = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
        
    }
})
export default Axioscliant;
