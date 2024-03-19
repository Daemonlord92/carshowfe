import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const CarRow = (props:
     { data:
        { id: number; make: string; model: string; vin: string }
     }
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