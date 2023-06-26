import axios from "axios";

// create inatance for a base url
const instance=axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
export default instance