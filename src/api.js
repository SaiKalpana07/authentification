import axios from "axios";


export const saveData = async (payload) => {alert('Api') 
    console.log('payload',payload)
    const URL = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await axios(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: payload,
        });
        return response;
    } catch (error) {
        throw error;
    }
}
