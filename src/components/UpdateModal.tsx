import { Car } from "../type/Car"
import { Dialog, Button, Typography, Input, FormControl, InputLabel} from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query";

const UpdateModal = ({car,
     isUpdateOpen,
      setIsUpdateOpen}:
      {car:Car, 
        isUpdateOpen:boolean, 
        setIsUpdateOpen:(arg:boolean) => void}) => {

            const handleClose = () => {
                setIsUpdateOpen(false)
            }
    return(
        <Dialog open={isUpdateOpen}>
            <FormControl>
                <InputLabel htmlFor="make">
                    Make:
                </InputLabel>
                <Input id="make" required value={car.make}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="model">
                    Model:
                </InputLabel>
                <Input id="model" required value={car.model} />
            </FormControl>
            <Button>
                Submit
            </Button>
            <Button>
                Cancel
            </Button>

        </Dialog>
    )
}

export default UpdateModal