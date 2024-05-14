import React from 'react'
import { useThemeStore } from '../Store/ThemeManagement'
import { Image, ConfigProvider } from 'antd'
import profilePicture from '../assets/images/MarkmeFormal.jpeg'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';


const About:React.FC = () => {

  const isDark = useThemeStore(state => state.isDark)

  return (
    <ConfigProvider
      theme={{
        components: {
          Timeline: {
            tailColor: isDark ? '#fff' : '#1e88e5',
            controlHeightLG: 61
          },
        },
      }}
    >
    <section 
      id="about" 
      className={`w-full transition-all delay-50 ease-in-out 
      ${isDark ? 'bg-slate-800': 'bg-brand-secondary'} px-10 md:px-20 lg:px-30 xl:px-40 py-20`}
    >
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="font-ubuntu text-gray-400">Get to know</p>
        <h3 className="font-ubuntu text-brand-primary text-3xl">About Me</h3>
      </div>
      <div className='flex flex-col md:flex-row gap-1'>
        <div className='flex flex-col items-center px-4'>
          <Image 
            src={profilePicture} 
            alt='Profile' 
            className='rounded-md max-w-[300px]'
            loading='lazy'
          />
            <div>
                <div className='mt-3'>
                  <p className='text-xl text-white font-ubuntu'>4th year student</p>
                </div>
            </div>
        </div>
        <div className='w-full h-full pl-5'>
          <p className='font-bold font-karla text-white text-2xl'>Education</p>

          <Timeline
            className='mt-10'
            items={[
              {
                children: <div className='flex flex-col'>
                  <h2 className='text-xl font-extrabold font-karla text-brand-primary'>City of Malabon University</h2>
                  <p className='font-karla text-white font-extralight text-lg'>Bachelor of Science in Information Technology</p>
                  <div className='flex justify-between'>
                    <small className='text-gray-400 font-ubuntu'>Malabon City, Philippines</small>
                    <small className='text-gray-400 font-ubuntu italic font-light'>S.Y 2020-2024</small>
                  </div>
                </div>,
              },
              {
                children: 'Solve initial network problems 2015-09-01',
                color: 'green',
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
              },
              {
                color: 'red',
                children: 'Network problems being solved 2015-09-01',
              },
              {
                children: 'Create a services site 2015-09-01',
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                children: 'Technical testing 2015-09-01',
              },
            ]}
            />
        </div>
      </div>
    </section>
</ConfigProvider>
  )
}
export default About;

{/*  */}

{/* <div className='grid grid-cols-3 gap-1'>
    <div className='border border-black grid gap-2 grid-col-1 mt-10'>
      <Image 
        className='rounded-md'
        src='https://avatars.githubusercontent.com/u/72028700?v=4'
        alt='Profile'
        preview={false}
      />
      <Image
        className='rounded-md'
        src='https://avatars.githubusercontent.com/u/72028700?v=4'
        alt='Profile'
        preview={false}
      />
    </div>
    <div className='border border-black grid gap-2 grid-col-1 mb-10'>
      <Image 
        className='rounded-md'
        src='https://avatars.githubusercontent.com/u/72028700?v=4'
        alt='Profile'
        preview={false}
      />
      <Image
        className='rounded-md'
        src='https://avatars.githubusercontent.com/u/72028700?v=4'
        alt='Profile'
        preview={false}
      />
    </div>
  </div> */}