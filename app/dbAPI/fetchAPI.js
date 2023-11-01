import { useEffect, useState } from "react";
import axios from 'axios'

export async function plantData(){
    try{
        const response = await axios.get('http://192.168.56.1:3000/get_all_plantinfo')
        console.log(response)
        console.log("I was pressed Successfully!")
        return response
    }catch(error){
        console.error('API Error:', error);
    }
    
    console.log("I was pressed")
}