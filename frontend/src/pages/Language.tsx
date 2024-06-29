import React from 'react';
import { Tabs,ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import { useThemeStore } from '../Store/ThemeManagement';
import { Frontend } from '../components/LanguageSection/Frontend';
import { Backend } from '../components/LanguageSection/Backend';
import { Database } from '../components/LanguageSection/Database';

const Language: React.FC = () => {
    const isDark = useThemeStore((state) => state.isDark);

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: <p
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-anchor-placement="top-bottom" 
                >Frontend</p>,
            children: <Frontend />,
        },
        {
            key: '2',
            label: <p
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-anchor-placement="top-bottom" 
                >Backend</p>,
            children: <Backend />,
        },
        {
            key: '3',
            label: <p
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-anchor-placement="top-bottom" 
                >Database</p>,
            children: <Database />,
        },
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                Tabs: {
                    itemColor: isDark ? '#fff' : 'rgb(107 114 128)',
                    itemHoverColor: '#2761ba',
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
                    <p 
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-anchor-placement="top-bottom" 
                        className={`font-ubuntu ${isDark ? 'text-gray-300' : 'text-gray-7000'}`}>Language/Stack that I use</p>

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-anchor-placement="top-bottom" 
                        className={`font-ubuntu text-3xl ${isDark ? 'text-blue-500' : 'text-gray-800'}`}>I'm familiar with</h2>
                </div>

                <Tabs
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-anchor-placement="top-bottom" 
                    className="mt-10"
                    centered={true}
                    items={items}
                    
                />
            </section>
        </ConfigProvider>
    );
};

export default Language;
