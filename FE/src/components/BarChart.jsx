import React from 'react'
import { ChartContainer } from './ui/chart'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import BlueCard from './BlueCard'
import IncomeCard from './IncomeCard'
import ExpenseCard from './ExpenseCard'
import LastRecord from './LastRecord'



const BarCharts = () => {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        }
    }



    return (
        <div className=' flex flex-col mt-2 w-[1216px] h-screen mx-auto p-4'>
            <div className='flex justify-between'>
                <BlueCard />
                <IncomeCard />
                <ExpenseCard />
            </div>
            <div className='w-[588px] h-fit mt-[40px] bg-white border border-slate-500 rounded-xl p-4 '>
                <div className='py-4'>Income Expence</div>
                <ChartContainer config={chartConfig} className="h-fit w-full">

                    <BarChart accessibilityLayer data={chartData}>
                        <YAxis></YAxis>
                        <XAxis></XAxis>
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </div> 
            <LastRecord/>
        </div>
    )
}

export default BarCharts