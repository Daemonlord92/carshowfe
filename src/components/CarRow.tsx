import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Car } from '../type/Car';

const CarRow = (props:
     { data:Car}
     ) => {
    const {id, make, model, vin} = props.data

    return(
        <TableRow key={id}>
            <TableCell>{make}</TableCell>
            <TableCell>{model}</TableCell>
            <TableCell>{vin}</TableCell>
        </TableRow>
    )
}

export default CarRow