import React from 'react'
import { ConfigProvider, Image } from 'antd';
import { useThemeStore } from '../Store/ThemeManagement'

const Blogs:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark)


    const arrayData = [
        {
            id: 1,
            title: 'SQL Data Manipulation',
            description: 'An overview of data manipulation using various functions in MySQL.',
            image_link: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5trzp90tbioneyv1xb54.png',
            blog_link: 'https://dev.to/marklouisalter/sql-data-manipulation-2e4j'
        },
        {
            id: 2,
            title: 'Introduction to SQL',
            description: 'Getting familar with SQL and how to use it in your applications.',
            image_link: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl3e3jcgix5sxs1fqx2n3.png',
            blog_link: 'https://dev.to/marklouisalter/introduction-to-sql-426c'
        },
        {
            id: 3,
            title: 'SQL Aggregate Functions',
            description: 'An overview of aggregate functions in SQL and how to use them in your applications.',
            image_link: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjwghnyjv5m5dym9l0n9x.png',
            blog_link: 'https://dev.to/marklouisalter/sql-aggregate-functions-5g3d'
        },
        
    ]

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
                id="blogs"
                className={`w-full transition-all delay-50 ease-in-out ${
                    isDark ? 'bg-slate-800' : 'bg-white'
                } px-10 md:px-20 lg:px-30 xl:px-40 py-20`}
            >
            <div className="flex flex-col justify-center items-center">
                <p className={`font-ubuntu ${isDark ? 'text-gray-400': 'text-gray-500'}`}>View my latest blogs</p>
                <h3 className={`font-ubuntu text-3xl ${isDark ? 'text-brand-primary': 'text-brand-secondary'}`}>Latest Blogs</h3>
            </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {arrayData.map((data, index) => (
                        <article key={index} className='mt-5'>
                            <div className={`cursor-pointer shadow-xl shadow-spead-xl transition-all delay-50 ease-in-out rounded-md hover:scale-105
                                ${isDark ? 'bg-[#101d2e] text-gray-300' : 'bg-white text-gray-700'}
                                `}>
                                <div className='w-full rounded-t-md'>
                                    <Image 
                                        src={data.image_link}
                                        alt='Blog Image' 
                                        className='w-full h-full object-cover rounded-t-md'    
                                        />
                                </div>
                                <div className='px-5 py-4'>
                                    <h3 className='font-karla text-xl mb-1'>{data.title}</h3>
                                    <p className='font-ubuntu text-gray-400'>{data.description}</p>
                                </div>

                                <div className='flex flex-row justify-end px-5 pb-4'>
                                    <a 
                                        target='_blank'
                                        href={data.blog_link} 
                                        className='font-karla text-white hover:text-blue-500 transition-all delay-50 ease-in-out'
                                        >
                                        Read More
                                    </a>
                                </div>
                            </div>
                            {/* <div className='border border-red-500'></div> */}
                        </article>
                    ))}
                </div>  
                <div>
                <div className='flex flex-row justify-center items-center mt-10'>
                    <div className='flex-grow border-t border-gray-300'></div>
                    <button 
                        onClick={() => window.open('https://dev.to/marklouisalter')}
                        className={`transition-all delay-50 ease-in-out focus:outline-none focus:ring-2 
                        focus:ring-brand-primary px-5 py-1 mx-3 rounded-md border border-transparent 
                        ${isDark ? 'bg-white border-white text-black hover:bg-slate-800 hover:text-white hover:border-white' : 
                        'bg-brand-primary border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary text-white'}`}
                    >
                        View More
                    </button>
                    <div className='flex-grow border-t border-gray-300'></div>
                </div>

                </div>

            </section>
        </ConfigProvider>
    )
}

export default Blogs;