import { AppBar, Toolbar, Button, Typography, Stack } from "@mui/material"
import { CatchingPokemon } from '@mui/icons-material'
export const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <CatchingPokemon /> <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }} >PokeMon</Typography>
                <Stack spacing={2} direction="row">
                    <Button color="inherit" variant="text" >Login</Button>
                    <Button color="inherit" variant="text" >Login</Button>
                    <Button color="inherit" variant="text" >Login</Button>
                    <Button color="inherit" variant="text" >Login</Button>
                    <Button color="inherit" variant="text" >Login</Button>
                </Stack>
            </Toolbar></AppBar>
    )
}
