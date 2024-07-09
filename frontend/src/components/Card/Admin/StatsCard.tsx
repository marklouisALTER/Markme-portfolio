import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { FaCalendarCheck } from "react-icons/fa6";

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

export const StatsCard = ({ data }: { data: SummaryReportDataType }) => {
    return (
        <Card className="w-full bg-[#101d2e] max-w-md p-6 grid gap-6 border hover:scale-[1.01]
        border-[#101d2e] hover:shadow-lg hover:cursor-pointer transition-all delay-50 ease-linear">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <CardTitle className="text-2xl lg:text-3xl xl:text-4xl font-bold font-karla text-white">{data.scheduleData.total_schedules}</CardTitle>
                    <CardDescription className="text-xs font-ubuntu text-gray-400">Total Activities</CardDescription>
                </div>
                <FaCalendarCheck className="w-7 md:w-10 h-7 md:h-10 text-brand-primary" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 text-sm">
                <div className="bg-brand-primary rounded-md px-3 py-1 xl:p-4 flex xl:flex-col items-center justify-between xl:justify-center">
                    <div className="text-xl xl:text-2xl font-bold font-karla order-2 xl:order-1 text-[#101d2e]">{data.scheduleData.completed}</div>
                    <div className="font-ubuntu xl:text-center order-1 xl:order-2 text-white">Completed</div>
                </div>
                <div className="bg-brand-primary rounded-md px-3 py-1 xl:p-4 flex xl:flex-col items-center justify-between xl:justify-center">
                    <div className="text-xl xl:text-2xl font-bold font-karla order-2 xl:order-1 text-[#101d2e]">{data.scheduleData.pending}</div>
                    <div className="font-ubuntu xl:text-center order-1 xl:order-2 text-white">Pending</div>
                </div>
                <div className="bg-brand-primary rounded-md px-3 py-1 xl:p-4 flex xl:flex-col items-center justify-between xl:justify-center">
                    <div className="text-xl xl:text-2xl font-bold font-karla order-2 xl:order-1 text-[#101d2e]">{data.scheduleData.completion_rate}</div>
                    <div className="font-ubuntu xl:text-center order-1 xl:order-2 text-white">Comp. Rate</div>
                </div>
            </div>
        </Card>
    )
}
