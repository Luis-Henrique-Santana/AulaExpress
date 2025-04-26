import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

interface HeaderProps{
  user?: User
}

export default function Header({user}: HeaderProps){
   return(
    <Box sx={{ flexGrow: 1 , borderBottom: '2px solid var(--quinary)'}}>
    <AppBar position="static" sx={{background: 'var(--primary)', color: 'var(--quinary)'}}>
      <Toolbar>
        <Link href={'/'} className="flex grow gap-1 items-center">
            <Image
            src={'/imagens/LogoTransparente.png'}
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
            />
            <Typography variant="h6" component="div" >
                Aula Express
            </Typography>
        </Link>
        <Menu userName={String(user?.name)}/>
      </Toolbar>
    </AppBar>
  </Box>
   )
}