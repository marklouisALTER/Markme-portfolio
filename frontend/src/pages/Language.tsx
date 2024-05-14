import React from 'react';
import { Tabs,ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import { useThemeStore } from '../Store/ThemeManagement';
import { Frontend } from '../components/LanguageSection/Frontend';
import { Backend } from '../components/LanguageSection/Backend';
import { Database } from '../components/LanguageSection/Database';

export const Language: React.FC = () => {
    const isDark = useThemeStore((state) => state.isDark);

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <p>Frontend</p>,
            children: <Frontend />,
        },
        {
            key: '2',
            label: <p>Backend</p>,
            children: <Backend />,
        },
        {
            key: '3',
            label: <p>Database</p>,
            children: <Database />,
        },
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                Tabs: {
                    itemColor: isDark ? '#fff' : 'rgb(107 114 128)',
                    itemHoverColor: '#0d47a1',
                    colorBgBase: '#fff',
                },
                },
            }}
        >
            <section
                id="language"
                className={`w-full transition-all delay-50 ease-in-out ${
                    isDark ? 'bg-slate-800' : 'bg-white'
                } px-10 md:px-20 lg:px-30 xl:px-40 py-20`}
            >
                <div className="flex flex-col justify-center items-center">
                    <p className={`font-ubuntu ${isDark ? 'text-gray-400': 'text-gray-500'}`}>Language/Stack that i use</p>
                    <h3 className={`font-ubuntu text-3xl ${isDark ? 'text-brand-primary': 'text-brand-secondary'}`}>I'm familiar with</h3>
                </div>

                <Tabs
                    className="mt-10"
                    centered={true}
                    items={items}
                    
                />
            </section>
        </ConfigProvider>
    );
};
