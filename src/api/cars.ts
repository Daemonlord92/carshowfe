import axios from "axios";
import { Car } from "../type/Car";

export const fetchCars = async (): Promise<Car[]> => {
    const { data } = await axios.get('http://localhost:8080/api/v1/car/')
    return data
}

export const postNewCar = async (newCar:Car): Promise<string> => {
    console.log("MJM:l10:postNewCar" + newCar.make +newCar.model)
    const { data } = await axios.post('http://localhost:8080/api/v1/car/', newCar,{
        headers: {
            "Context-Type" : "application/json"
        }
        
    })
    return data
}