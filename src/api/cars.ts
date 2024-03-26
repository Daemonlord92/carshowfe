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
            "Context-Type" : "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("Authorization"),
            "Allow-Control-Allow-Origin": "http://localhost:5173/"
        }
        
    })
    return data
}

export const deleteCar = async (id:number|undefined): Promise<string> => {
    const { data } = await axios.delete('http://localhost:8080/api/v1/car/' + id, {
        headers: {
            "Context-Type" : "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("Authorization"),
            "Allow-Control-Allow-Origin": "http://localhost:5173/"
        }
    })
    return data
}

export const updateCar = async (car:Car): Promise<string> => {
    const { data } = await axios.put('http://localhost:8080/api/v1/car/' + car.id, car, {
        headers: {
            "Context-Type" : "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("Authorization"),
            "Allow-Control-Allow-Origin": "http://localhost:5173/"
        }
    })
    return data
}