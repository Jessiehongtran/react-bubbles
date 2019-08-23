import axios from 'axios';

export const axiosWithAuth = () => {
   const token = localStorag.getItem('token')

   return axios.create({
       headers: {
           Authorization: token
       }
   })
}