import { AppBar, Box, Toolbar, Typography, Container, Button } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'


export default function NavBar() {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{ flexGrow: 1 }}>
                            <Link to='/' style={{ textDecoration: 'none', color: '#eee' }}>
                                Stack
                            </Link>
                        </Typography>
                        <Button variant='contained' color='primary' onClick={() => navigate('/task/form')}>
                            Add task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
