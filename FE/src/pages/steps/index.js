
import Balance from "@/components/Balance";
import Currency from "@/components/Currency";
import Finish from "@/components/Finish";
import { LogoIcon } from "@/components/icon/LogoIcon";
import { useState } from "react"



const stepper = ["Currency", "Balance", "Finish"]

const Steps = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = () => setCurrentIndex(currentIndex + 1)

    return (
        <main className="mx-auto flex flex-col justify-center items-center mt-[40px] w-[384px]">
            <LogoIcon/>
            <div className="flex gap-6 mt-[48px]">
                {stepper.map((step, index) => (
                    <>
                        <div
                            className={`${currentIndex >= index ? "text-red-800" : "text-black"
                                }`}
                            key={index}>
                            {step}
                        </div>
                    </>
                ))}
            </div>

            {/* {currentIndex >= index ? <div className="h-[1px] w-16 bg-red-800 mt-[8px]"/> : null} */}
            {currentIndex === 0 && <Currency />}
            {currentIndex === 1 && <Balance />}
            {currentIndex === 2 && <Finish />}

            <button className="gap-8 mt-8 bg-[#0166FF] w-full h-[48px] rounded-xl text-white f " onClick={handleClick}>CONFIRM</button>
        </main>
    )
}

export default Steps 