import { IconButton, Tooltip } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import { PersonAdd } from "@mui/icons-material";

interface ToggleProps{
    type: 'signup' | 'signin'
    switchType: (type: 'signup' | 'signin') => void
}

export default function Toggle({type, switchType}: ToggleProps){
   return(
       <section className="w-[25%] flex justify-between">
            <Tooltip title="Login">
                <IconButton 
                onClick={() => switchType('signin')}
                sx={{backgroundColor: type === 'signin' ? 'var(--tertiary)' : "transparent"}}
                >
                    <LoginIcon sx={{color: 'black'}}/>
                </IconButton>
            </Tooltip>

            <Tooltip title="Cadastro">
                <IconButton 
                onClick={() => switchType('signup')}
                sx={{backgroundColor: type === 'signup' ? 'var(--tertiary)' : "transparent"}}
                >
                    <PersonAdd sx={{color: 'black'}}/>
                </IconButton>
            </Tooltip>
       </section>
   )
}