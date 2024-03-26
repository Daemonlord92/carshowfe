import { Button,Input, FormControl, InputLabel, Box} from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { login } from "../api/auth"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { mutate } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            sessionStorage.setItem("Authorization", data.token)
            alert("Login Successful")
        },
        onError:(error:Error) => {
            alert('Error: ' + error.message)
        }
    })

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        const data = {
            "email": email,
            "password": password
        }

        mutate(data)
    }

    return (
        <Box component="form" onSubmit={(event) => handleSubmit(event)}>
            <FormControl>
                <InputLabel htmlFor="email">
                    Email:
                </InputLabel>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">
                    Password:
                </InputLabel>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Button type="submit">
                Log In
            </Button>
        </Box>
    )
}

export default Login