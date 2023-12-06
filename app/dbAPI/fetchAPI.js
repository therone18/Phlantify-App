import axios from 'axios';
import { useState, useEffect, useRef } from "react";
export async function fetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
      axios.get('http://192.168.1.13:5000/api/data')
        .then(response => {
          setData(response.data.message);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    console.log(data)
}
