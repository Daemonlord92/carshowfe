import { Car } from "../type/Car"
import { Dialog, Button, Typography, Input, FormControl, InputLabel, Box} from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar } from "../api/cars";
import { useEffect, useState } from "react";

const UpdateModal = ({car,
     isUpdateOpen,
      setIsUpdateOpen}:
      {car:Car, 
        isUpdateOpen:boolean, 
        setIsUpdateOpen:(arg:boolean) => void}) => {
            const [make, setMake] = useState('')
            const [model, setModel] = useState('')
            const queryClient = useQueryClient()
            useEffect(() => {
                setMake(car.make)
                setModel(car.model)
            }, [])
            const { mutate } = useMutation({
                mutationFn: updateCar,
                onSuccess: (data:string) => {
                    alert(data)
                    queryClient.invalidateQueries()
                }
            })
            const handleSubmit = () => {
                const updateCar:Car = {
                    id: car.id,
                    vin: car.vin,
                    make:make,
                    model:model
                }
                mutate(updateCar)
                handleClose()
            }
            const handleClose = () => {
                setIsUpdateOpen(false)
            }
    return(
        <Dialog open={isUpdateOpen}>
            <Box component="div" sx={{p:10}}>
                <FormControl>
                    <InputLabel htmlFor="make">
                        Make:
                    </InputLabel>
                    <Input id="make" required value={make} onChange={(e) => setMake(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="model">
                        Model:
                    </InputLabel>
                    <Input id="model" required value={model} onChange={(e) => setModel(e.target.value)}/>
                </FormControl>
                <Button onClick={event => handleSubmit(event)}>
                    Submit
                </Button>
                <Button onClick={() => handleClose()}>
                    Cancel
                </Button>
            </Box>

        </Dialog>
    )
}

export default UpdateModal