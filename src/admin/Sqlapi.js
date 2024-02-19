import React from 'react';
import axios from "axios";



const Employee_api_url= "http://localhost:8080/api/v1/employees";
class Employee{
    getEmployees(){
        return axios.get(Employee_api_url);
    }
    setEmployees( employee){
        return axios.post(Employee_api_url,employee);
    }

}


function Sqlapi() {
  return (
    <div></div>
  )
}

export default Sqlapi