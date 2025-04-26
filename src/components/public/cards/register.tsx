import { Alert, Button, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface RegisterProps{
    error?: string
}

export default function Register({error}: RegisterProps){
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirm_password: formData.get('confirm_password'),
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
            <p className="text-[rgb(0,0,0,0.5)] text-3xl">Faça seu cadastro</p>
            <TextField name="name" id="name" label="Nome" variant="outlined" sx={{width: '100%'}} />
            <TextField name="email" id="email" label="Email" variant="outlined" sx={{width: '100%'}} />
            <div className="w-full flex justify-between">
                <TextField name="password" id="password" label="Senha" variant="outlined" sx={{width: '49.5%'}} />
                <TextField name="confirm_password" id="confirm_password" label="Confirmar Senha" variant="outlined" sx={{width: '49.5%'}} />
            </div>
            <div className="w-full flex justify-end">
                <Button type="submit" variant="outlined">Cadastro</Button>
            </div>
        </form>
   )
}