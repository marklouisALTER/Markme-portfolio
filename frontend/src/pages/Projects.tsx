import React from 'react'
import { Tabs,ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import { useThemeStore } from '../Store/ThemeManagement'
import { PersonalProject } from '../components/ProjectSection/PersonalProject';
import { DesignProject } from '../components/ProjectSection/DesignProject';
import { OtherProjects } from '../components/ProjectSection/OtherProjects';
export const Projects:React.FC = () => {

  const isDark = useThemeStore(state => state.isDark)

  const items: TabsProps['items'] = [
    {
        key: '1',
        label: <p>Projects</p>,
        children: <PersonalProject />
    },
    {
        key: '2',
        label: <p>Designs</p>,
        children: <DesignProject />,
    },
    {
      key: '3',
      label: <p>Other Projects</p>,
      children: <OtherProjects />,
    }
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
            id="certificate"
            className={`w-full transition-all delay-50 ease-in-out ${
                isDark ? 'bg-slate-800' : 'bg-white'
            } px-10 md:px-20 lg:px-30 xl:px-40 py-20`}
        >
          <div className="flex flex-col justify-center items-center">
            <p className={`font-ubuntu ${isDark ? 'text-gray-400': 'text-gray-500'}`}>Here's some of my projects</p>
            <h3 className={`font-ubuntu text-3xl ${isDark ? 'text-brand-primary': 'text-brand-secondary'}`}>My Projects</h3>
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
