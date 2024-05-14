import React from 'react'
import speaker_cert from '../../assets/images/speaker/speaker_cert.jpg'
import { ClockCircleOutlined } from '@ant-design/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Image } from 'antd'
import { useThemeStore } from '../../Store/ThemeManagement'

type sampleDataCert = {
    title: string;
    description: string;
    provider: string;
    date: string;
    description_two?: string;
    credential_link?: string;
}

type CertificationProps = {
    data: sampleDataCert[];
}

export const Speaker:React.FC = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const isDark = useThemeStore(state => state.isDark);

    const dataSample: CertificationProps = {
        data: [
            {
                title: 'Introduction to ReactJS and Tailwind CSS',
                description: `This speaker certificate i tackle the basics of reactjs and tailwind such as familiarization 
                in the react js structure, setting up react js with tailwind css, walkthrough to the components, creating 
                and discussing the uses of every tailwind classes, and hooks, etc.`,
                provider: 'NU CCIT',
                date: 'March 08, 2024',
                description_two: `This certificate acknowledges my participation as a speaker in the event. 
                It was my first time teaching in a webinar, and I am grateful for the opportunity to share my knowledge. 
                Although I may have lacked clarity in some explanations, attendees gained insights into ReactJS with 
                Tailwind CSS.`,
            },
        ]
    };

  return (
    <section className='flex flex-col justify-between md:flex-row gap-3 mt-5'>
        <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            className="mySwiper w-[25rem] h-auto md:w-[35rem] lg:w-[45rem] xl:w-[55rem] rounded-md"
        >

            <SwiperSlide>
                <Image 
                    src={speaker_cert} 
                    alt="Speaker Certificate" 
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            </Swiper>
        <div className='w-[100%] px-5'>
        {
            dataSample?.data.map((data, index) => (
                <div className={`${currentSlide === index ? 'block': 'hidden'}`}>
                    <h2 className={`text-2xl font-karla font-extrabold 
                        ${isDark ? 'text-brand-primary' : 'text-white'}`}>
                            {data.title}
                    </h2>
                    <div className='flex justify-between mt-2'>
                        <h5 className={`font-ubuntu md:text-lg font-medium ${isDark ? 'text-white' : 'text-gray-300'}`}>{data.provider}</h5>
                        <div className='flex gap-2'>
                            <ClockCircleOutlined className={`${isDark ? 'text-brand-primary' : 'text-gray-300'}`} />
                            <h5 className={`font-ubuntu md:text-lg font-medium ${isDark ? 'text-white' : 'text-gray-300'}`}>{data.date}</h5>
                        </div>
                    </div>
                    <p className={`mt-5 font-ubuntu md:text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-200'}`}>
                        {data.description}
                    </p>
                    <p className={`mt-5 font-ubuntu md:text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-200'}`}>
                        {data?.description_two}
                    </p>
                    <div className='flex items-center justify-center md:justify-end mt-5'>
                    {
                        data?.credential_link && (
                            <a 
                                href={data.credential_link} 
                                target='_blank' rel='noreferrer' 
                                className={`font-ubuntu md:text-lg font-medium cursor-pointer ${isDark ? 'text-brand-primary': 'text-blue-400'}`}>
                                View Credential
                            </a>
                        )

                    }
                    </div>
                </div>
                
            ))
        }
        </div>
    </section>
  )
}
