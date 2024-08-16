import { LogoIcon } from "@/components/icon/LogoIcon"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios"
import { useRef, useState } from "react";

const SignUp = () => {
    const [error, setError] = useState(" ");
    const formRef = useRef()

    const onSubmit = async (event) => {
        event.preventDefault();
        const name = formRef.current[0].value
        const email = formRef.current[1].value
        const password = formRef.current[2].value
        const rePassword = formRef.current[3].value

        if (password != rePassword) {
            alert("pass btaarahgui bna")
            return
        }

        try {
            const res = await axios.post('http://localhost:8000/auth/signup' , {name, email, password, rePassword})
            localStorage.setItem('user', JSON.stringify(res.data))
        } catch(error){
            setError(error)
        }
    }
    return (
        <div className="grid w-full h-screen grid-cols-2 ">
            <div className="flex items-center justify-center ">
                <form ref={formRef} onSubmit={onSubmit} className="flex flex-col items-center justify-center gap-10 w-[384px]">
                    <LogoIcon />
                    <div className="mb-8 space-y-1 text-center">
                        <h1 className="text-2xl font-semibold text-slate-900">Create Geld account</h1>
                        <p className="text-slate-700">Sign up below to create your Wallet account</p>
                    </div>
                    <div className=" flex flex-col w-full gap-4">
                        <Input placeholder="Name" type="text" className="w-full bg-[#F3F4F6]" />
                        <Input placeholder="Email" type="email" className="w-full bg-[#F3F4F6]" />
                        <Input placeholder="Passpord" type="password" className="w-full bg-[#F3F4F6]" />
                        <Input placeholder="Re-asspord" type="password" className="w-full bg-[#F3F4F6]" />
                    </div>
                    <div className=" w-full">
                        <Button className="w-full rounded-xl bg-[#0166FF] ">Sign up</Button>
                    </div>
                    <div className="flex justify-center gap-2">
                        <p>Already have a account?</p>
                        <Link href="/sign-in" className="text-[#0166FF]">Log in </Link>
                    </div>
                </form>
            </div>
            <div className=" bg-[#0166FF]"></div>
        </div>

    );
};


export default SignUp