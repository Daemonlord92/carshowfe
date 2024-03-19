import axios from "axios";
import { Car } from "../type/Car";

export const fetchCars = async (): Promise<Car[]> => {
    const { data } = await axios.get('http://localhost:8080/api/v1/car/')
    return data
}