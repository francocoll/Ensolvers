import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from "@mui/material"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"


export default function Form() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const [editing, setEditing] = useState(false)
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = e =>
    setTask({ ...task, [e.target.name]: e.target.value })

  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()
    setTask({ title: data.title, description: data.description })
    setEditing(true)
  }

  useEffect(() => {
    if (params.id) {
      loadTask(params.id)
    }
  }, [params.id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing) {
      await fetch(`http://localhost:4000/tasks/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })

    } else {
      await fetch('http://localhost:4000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': "application/json" }
      })
    }
    setLoading(false)
    navigate('/')
  }
  return (
    <Grid container direction='column' alignItems='center' justifyContent='center'>
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }} style={{
            backgroundColor: '#1e2562',
            padding: '1rem'
          }}
        >
          <Typography variant='5' textAlign='center' color='white'>
            {editing ? 'Edit task' : 'Add task'}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label='Title'
                sx={{ display: 'block', margin: '.5rem 0' }}
                name='title'
                value={task.title}
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                onChange={handleChange}
              />
              <TextField
                variant="filled"
                label='Description'
                multiline
                rows={4}
                x={{ display: 'block', margin: '.5rem 0' }}
                name='description'
                value={task.description}
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                onChange={handleChange}
              />
              <Button variant='contained' color='primary' type="submit" disabled={
                !task.title || !task.description
              }>
                {loading ? <CircularProgress
                  color='inherit'
                  size={24} /> : 'Save'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
