import { useQuery } from "@tanstack/react-query"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchCars } from "../api/cars"
import { Car } from "../type/Car"
import CarRow from "./CarRow";

const CarList = () => {
    const { data, error, isLoading } = useQuery<Car[], Error>({
        queryKey: ['cars'],
        queryFn:fetchCars
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>An error has occurred, Time to cry under the desk: {error.message}</div>

    return(
        <div>
            <TableContainer>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Make
                            </TableCell>
                            <TableCell>
                                Model
                            </TableCell>
                            <TableCell>
                                VIN
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data?.map((car, index) => (
                                <CarRow key={index} data={car}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CarList