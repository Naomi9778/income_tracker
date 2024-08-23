import Balance from "@/components/Balance";
import Currency from "@/components/Currency";
import Finish from "@/components/Finish";
import { LogoIcon } from "@/components/icon/LogoIcon";
import { useState } from "react"
import Link from "next/link";



const stepper = ["Currency", "Balance", "Finish"]



const Steps = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = () =>
        setCurrentIndex(currentIndex + 1)


    return (
        <main className="mx-auto flex flex-col justify-center items-center mt-[40px] w-[384px]">
            <LogoIcon />
            <div className="flex gap-6 mt-[48px] w-[240px] justify-center items-center">
                {stepper.map((step, index) => (
                    <>
                        <div className="flex flex-col justify-center items-center"
                            key={index} >
                            <div className={`${currentIndex >= index ? " relative flex justify-center items-center size-5 rounded-full text-white bg-[#0166FF]" : " flex justify-center items-center bg-gray size-5 rounded-full bg-[#E5E7EB] text-black"}`}>{index + 1}
                                
                                <div>{currentIndex > index ? <div className=" absolute top-0 translate-y-1/2  h-[4px] w-20 bg-[#0166FF] mt-[8px]" /> : null}</div>
                            </div>

                            <p>{step}</p>
                        </div>
                    </>
                ))}
            </div>
            {currentIndex === 0 && <Currency />}
            {currentIndex === 1 && <Balance />}
            {currentIndex === 2 && <Finish />}

                <Link className="w-full" href={currentIndex === 2 ? "/dashboard" : ""}>
                <button className="gap-8 mt-8 bg-[#0166FF] w-full h-[48px] rounded-xl text-white"
                onClick={handleClick}>{currentIndex === 2 ? "Go To Dashboard" : "Confirm"}
                </button>
                </Link>
        </main>
    )
}

export default Steps 