import { Card, CardContent, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function List() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
    setTasks(data)
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: 'DELETE',
      })
    } catch (error) {
      console.log(error)
    }

    setTasks(tasks.filter(task => task.id !== id))
  }

  useEffect(() => {
    loadTasks()
  }, [])


  return (
    <>
      <h1>Activity list</h1>
      {tasks.map((task) => (
        <Card style={{ marginBottom: '1rem', backgroundColor: '#1e272e' }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between' }} key={task.id}>
            <div>
              <Typography style={{ color: 'white' }}>TITLE: {task.title}</Typography>
              <Typography style={{ color: 'white' }}>DESCRIPTION: {task.description}</Typography>
            </div>
            <div>
              <Button variant='contained' onClick={() => navigate(`/task/${task.id}/edit`)}>
                Edit
              </Button>
              <Button variant='contained' style={{ margin: '.5rem', backgroundColor: 'red' }} onClick={() => handleDelete(task.id)}>
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))
      }
    </>
  )
}
