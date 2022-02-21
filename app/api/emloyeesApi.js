import axios from 'axios';

export const fetchEmployeeList = async () => {
   return await axios.get("https://5f7335deb63868001615f557.mockapi.io/list").then(res => res).catch(err => err)
}
