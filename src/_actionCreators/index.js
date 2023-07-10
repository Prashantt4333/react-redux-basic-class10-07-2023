import axios from "axios";
import { URL } from "../helper/url_helper";

export const GetUserData = ()=>{
     return (dispatch)=>{
        axios.get(URL+"/api/users?page=2")
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            dispatch({ type:"ADD_USER_DATA",payload:response.data.data });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


        // setTimeout(()=>{
        //    
        // },2000)
        
     }
}