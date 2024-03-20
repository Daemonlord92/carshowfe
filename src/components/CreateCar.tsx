import { Box, Input, FormControl, InputLabel, Typography, TextField, Button, FormHelperText } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { postNewCar } from "../api/cars"
import { Car } from "../type/Car"

const CreateCar = () => {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [vin, setVin] = useState('')

    const mutation = useMutation({
        mutationFn: postNewCar,
        onSuccess: (data: string) => {
            alert(`Success: ${data}`);
        },
        onError: (error: Error) => {
            alert(`Error: ${error.message}`);
        },
    });
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newCar:Car = { make, model, vin }
        console.table(newCar)
        console.log("MJM:l26:handleSubmit:PreSubmit")
        mutation.mutate(newCar)
        console.log("MJM:l28:handleSubmit:AfterSubmit")
    }

    return(
        <Box component="form" onSubmit={handleSubmit} marginTop={4} >
                <FormControl>
                    <InputLabel htmlFor="make">
                        Make:
                    </InputLabel>
                    <Input id="make" aria-describedby="make-helper-text" required value={make} onChange={(e) => setMake(e.target.value)}/>
                    <FormHelperText id="make-helper-text">Please enter the brand of your car!</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="model">
                        Model:
                    </InputLabel>
                    <Input id="model" aria-describedby="model-helper-text" required value={model} onChange={(e) => setModel(e.target.value)} />
                    <FormHelperText id="model-helper-text">Please enter the model of the vehicle!</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="vin">
                        VIN:
                    </InputLabel>
                    <Input id="vin" required value={vin} onChange={(e) => setVin(e.target.value)}/>
                </FormControl>
                <Button type="submit" disabled={mutation.isPending}>
                    Submit
                </Button>
        </Box>
    )
}

export default CreateCar