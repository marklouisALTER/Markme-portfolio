import React, { useState } from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, ConfigProvider } from 'antd';
import type { Dayjs } from 'dayjs';
import { ActivityModal } from '@/components/Modal/ActivityModal';

export const Activities: React.FC = () => {
    const [isCalendarClick, setIsCalendarClick] = useState(false);

    const eventsMap: Record<string, { type: string; content: string }[]> = {
        '2024-07-08': [{ type: 'success', content: 'This is usual event.' }],
        '2024-07-10': [{ type: 'success', content: 'This is usual event.' }],
        '2024-07-15': [{ type: 'warning', content: 'This is warning event.' }],
        '2024-08-10': [{ type: 'success', content: 'This is usual event.' }],
        // Add more events as needed
    };

    const getListData = (value: Dayjs) => {
        const dateString = value.format('YYYY-MM-DD');
        return eventsMap[dateString] || [];
    };

    const getMonthData = (value: Dayjs) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Calendar: {
                        fullBg: '#1e293a',
                        itemActiveBg: '#1a202c',
                    },
                },
                token: {
                    colorText: '#fff',
                    controlItemBgHover: '#1a202c',
                    colorBgContainer: '#1a202c',
                    colorSplit: '#1e293a',
                    colorBorder: '#1a202c',
                },
            }}
        >
            <section className='h-full px-5'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-karla text-white'>
                    Hello, <span className='text-brand-primary'>Markme</span>
                </h2>
                <h5 className='text-gray-400 font-ubuntu mt-2 md:text-lg'>
                    Here's all your Schedule dates. I hope you can attend these all.
                </h5>
                <div className='w-full'>
                    <div className='bg-[#1e293a] rounded-lg p-5'>
                        <Calendar
                            cellRender={cellRender}
                            onSelect={(value) => {
                                setIsCalendarClick(true);
                                console.log(value.format(''));
                            }}
                            // onPanelChange={() => {
                            //     setIsCalendarClick(false);
                            // }}
                        />
                    </div>
                    
                </div>
                <ActivityModal open={isCalendarClick} close={() => setIsCalendarClick(false)} />
            </section>
        </ConfigProvider>
    );
};
