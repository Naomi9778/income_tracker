import { LogoIcon } from "@/components/icon/LogoIcon"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import { useState, useRef } from "react";
import { useRouter } from 'next/router'
 


const SignIn = () => {
    const [error, setError] = useState(" ");
    const formRef = useRef()
    const router = useRouter()

    const onSubmit = async (event) => {
        event.preventDefault();
        const email = formRef.current[0].value
        const password = formRef.current[1].value

       
        

        try {
            const res = await axios.post('http://localhost:8000/auth/signin' , {email, password})
            localStorage.setItem('user', JSON.stringify(res.data))
            if (res.data.success === true) { 
                return router.push("/dashboard")
            } else {
                return alert("Email or password incorrect ")
            }
        } catch(error){
            setError(error)
        }
    }
    return (
        <div className="grid w-full h-screen grid-cols-2 ">
            <div className="flex items-center justify-center ">
                <form ref={formRef} onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-10 w-[384px]">
                    <LogoIcon  />
                    <div className="mb-8 space-y-1 text-center">
                        <h1 className="text-2xl font-semibold text-slate-900">Welcome Back</h1>
                        <p className="text-slate-700">Welcome back, Please enter your details</p>
                    </div>
                    <div className=" flex flex-col w-full gap-4">
                        <Input placeholder="Email" type="email" className="w-full bg-[#F3F4F6]"/>
                        <Input placeholder="Passpord" type="password" className="w-full bg-[#F3F4F6]"/>
                    </div>
                    <div className=" w-full">
                        <Button className="w-full rounded-xl bg-[#0166FF] ">Log in</Button>
                    </div>
                    <div className="flex justify-center gap-2">
                        <p>Already have a account?</p>
                        <Link href="/sign-up" className="text-[#0166FF]"> Sign up </Link>
                    </div>
                </form>
            </div>
            <div className=" bg-[#0166FF]"></div>
        </div>

    );
};

export default SignIn