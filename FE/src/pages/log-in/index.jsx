import { LogoIcon } from "@/components/icon/LogoIcon"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LogIn = () => {
    return (
        <div className="grid w-full h-screen grid-cols-2 ">
            <div className="flex items-center justify-center ">
                <form className="flex flex-col justify-center gap-10 w-[384px]">
                    <LogoIcon />
                    <div className="mb-8 space-y-1 text-center">
                        <h1 className="text-2xl font-semibold text-slate-900">Create Geld account</h1>
                        <p className="text-slate-700">Sign up below to create your Wallet account</p>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <Input placeholder="Name" type="text" className="w-full bg-[#F3F4F6]" />
                        <Input placeholder="Email" type="email" className="w-full bg-[#F3F4F6]"/>
                        <Input placeholder="Passpord" type="password" className="w-full bg-[#F3F4F6]"/>
                        <Input placeholder="Re-asspord" type="password" className="w-full bg-[#F3F4F6]"/>
                    </div>
                    <div>
                        <Button className="w-full rounded-xl bg-[#0166FF] ">Sign up</Button>
                    </div>
                    <div className="flex justify-center gap-2">
                        <p>Already have a account?</p>
                        <a className="text-[#0166FF]">Log in </a>
                    </div>
                </form>
            </div>
            <div className=" bg-[#0166FF]"></div>
        </div>

    );
};

export default LogIn