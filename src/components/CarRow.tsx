import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Icon from '@mui/material/Icon';
import { Car } from '../type/Car';
import { useState } from 'react';
import DeleteModal from './DeleteModal';

const CarRow = ({ data }: { data: Car }) => {
    const { id, make, model, vin } = data;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <TableRow key={id}>
                <TableCell>{make}</TableCell>
                <TableCell>{model}</TableCell>
                <TableCell>{vin}</TableCell>
                <TableCell>
                    <Icon color='error' onClick={() => setIsOpen(true)}>
                        <DeleteForeverIcon />
                    </Icon>
                </TableCell>
            </TableRow>
            {isOpen && <DeleteModal isOpen={isOpen} id={id} setIsOpen={setIsOpen} />}
        </>
    );
};

export default CarRow;
