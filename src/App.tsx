import { AppBar, Toolbar, Typography } from '@mui/material'
import './App.css'
import CarList from './components/CarList'
import CreateCar from './components/CreateCar'
import Login from './components/Login'

function App() {


  return (
    <div>
        <AppBar
        position='static'>
          <Toolbar>
            <Typography align='center' variant='h2'>
            Car Show 🚘🚗
            </Typography>
          </Toolbar>
        </AppBar>
        <Login />
        <CreateCar/>
        <CarList />
      </div>
  )
}

export default App
