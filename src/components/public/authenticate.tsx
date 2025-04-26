'use client';

import { useState } from "react";
import Register from "./cards/register";
import Login from "./cards/login";
import Toggle from "./cards/toggle";

interface AuthenticateProps{
    error?: string
}

export default function Authenticate({error}: AuthenticateProps){
    const [type, setType] = useState<'signup' | 'signin'>('signin')

    function render() {
        if(type === 'signup')
            return <Register error={error}/>
        return <Login error={error}/>
    }

    function switchType(type: 'signup' | 'signin'){
        setType(type);
    }

    return(
        <section className="h-page w-full bg-quaternary flex flex-col gap-2 justify-center items-center">
                <Toggle type={type} switchType={switchType}/>
                {render()}
        </section>
    )
}