import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import Icon from '@mui/material/Icon';
import { Car } from '../type/Car';
import { useState } from 'react';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';

const CarRow = ({ data }: { data: Car }) => {
    const { id, make, model, vin } = data;
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)

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
                    <Icon color='secondary' onClick={() => setIsUpdateOpen(true)}>
                        <ElectricCarIcon />
                    </Icon>
                </TableCell>
            </TableRow>
            {isOpen && <DeleteModal isOpen={isOpen} id={id} setIsOpen={setIsOpen} />}
            {isUpdateOpen && <UpdateModal isUpdateOpen={isUpdateOpen} car={data} setIsUpdateOpen={setIsUpdateOpen} />}
        </>
    );
};

export default CarRow;
