import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import List from './components/List'
import NavBar from './components/NavBar'
import { Container } from '@mui/material'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/task/form' element={<Form />} />
          <Route path='/task/:id/edit' element={<Form />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
