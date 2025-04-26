import { Alert, Button, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface LoginProps{
    error?: string
}

export default function Login({error}: LoginProps){

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        console.log(data);
    }

   return(
       <form onSubmit={handleSubmit} className="w-[30%] h-[85%] bg-quaternary shadow-XXL rounded-md display flex flex-col justify-center items-center gap-3 p-5">
            {error && <Alert variant="outlined" severity="error">Algo deu errado, por favor, tente novamente</Alert>}
            <Link href={'/'}>
                <Image
                src='/imagens/Logo(p).png'
                alt="logo"
                width={150}
                height={150}
                className="rounded-full"
                />
            </Link>
            <p className="text-[rgb(0,0,0,0.5)] text-3xl">Bem vindo(a) de volta!</p>
            <TextField name="email" id="email" label="Email" variant="outlined" sx={{width: '100%'}} />
            <TextField name="password" id="password" label="Senha" variant="outlined" sx={{width: '100%'}} />
            <div className="w-full flex justify-end">
                <Button type="submit" variant="outlined">Login</Button>
            </div>
       </form>
   )
}