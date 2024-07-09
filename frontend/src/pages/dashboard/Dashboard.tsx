import { StatsCard } from '@/components/Card/Admin/StatsCard'
import { Footer } from '@/components/Footer';
import { Schedule } from '@/components/Schedule/Schedule';
import React from 'react'

type SummaryReportDataType = {
    scheduleData: {
        total_schedules: number;
        completed: number;
        pending: number;
        completion_rate: string;
    }
    todoListData: {
        total_todos: number;
        completed: number;
        pending: number;
        completion_rate: string;
    }
}

export const Dashboard:React.FC = () => {

    const summaryReportData: SummaryReportDataType[] = [{
        scheduleData: {
            total_schedules: 10,
            completed: 5,
            pending: 5,
            completion_rate: '50%'
        },
        todoListData: {
            total_todos: 10,
            completed: 5,
            pending: 5,
            completion_rate: '50%'
        },

    }]
  return (
    <section className='h-full px-5'>
        <h1 className='text-4xl my-5 font-karla text-white font-bold'>Hello, Mark Louis</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
            {summaryReportData.map((data, index) => (
                <StatsCard key={index} data={data} />
            ))}
        </div>
        <Schedule />
        <Footer />
    </section>
  )
}
