import axios from "axios";

export const login = async (loginData:unknown):Promise<undefined> => {
    const {data} = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
    return data
}