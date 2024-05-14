import React from 'react'
import { Tabs,ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import { useThemeStore } from '../Store/ThemeManagement'
import { Certification } from '../components/Certification/Certification';
import { Webinar } from '../components/Certification/Webinar';
import { Speaker } from '../components/Certification/Speaker';

export const Certificate:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark)

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <p>Certifications</p>,
            children: <Certification />
        },
        {
            key: '2',
            label: <p>Event Cert</p>,
            children: <Webinar />,
        },
        {
            key: '3',
            label: <p>Speaker</p>,
            children: <Speaker />,
        },
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                Tabs: {
                    itemColor: isDark ? '#fff' : '#fff',
                    itemHoverColor: '#0d47a1',
                    colorBgBase: '#fff',
                },
                },
            }}
        >
            <section
                id="certificate"
                className={`w-full transition-all delay-50 ease-in-out ${
                    isDark ? 'bg-slate-800' : 'bg-blue-900'
                } px-10 md:px-20 lg:px-30 xl:px-40 py-20`}
            >
            
            <div className="flex flex-col justify-center items-center">
                <p className={`font-ubuntu ${isDark ? 'text-gray-400': 'text-gray-400'}`}>All of my trainings and webinar cert</p>
                <h3 className={`font-ubuntu text-3xl ${isDark ? 'text-brand-primary': 'text-white'}`}>My Certificate</h3>
            </div>

            <Tabs
                className="mt-10"
                centered={true}
                items={items}
            />

            </section>
        </ConfigProvider>
    )
}
