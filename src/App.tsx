import { AppBar, Toolbar, Typography } from '@mui/material'
import './App.css'
import CarList from './components/CarList'

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
        <CarList />
      </div>
  )
}

export default App
