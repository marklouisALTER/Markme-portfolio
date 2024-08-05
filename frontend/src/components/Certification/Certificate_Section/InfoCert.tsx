import React from 'react'
import backend_cert from '../../../assets/images/certificate/backend_web_cert.png'
import data_eng_sql from '../../../assets/images/certificate/data_eng_sql.jpg'
import intro_in_network_cert from '../../../assets/images/certificate/intro_in_network_cert.png'
import javascript_training from '../../../assets/images/certificate/javascript_training.png'
import networking_essential_cert from '../../../assets/images/certificate/networking_essential_cert.png'
import react_cert from '../../../assets/images/certificate/react_cert.jpg'
import aws_cert from '../../../assets/images/certificate/aws_certificate.png'
import sql_cert from '../../../assets/images/certificate/sql_cert.jpg'
import { ClockCircleOutlined } from '@ant-design/icons';
import { MdSwipe  } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Image } from 'antd'
import { useThemeStore } from '../../../Store/ThemeManagement'


type sampleDataCert = {
    id: number
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
export const InfoCert:React.FC = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const isDark = useThemeStore(state => state.isDark);

    const dataSample: CertificationProps = {
        data: [
            {
                id: 1,
                title: 'SQL Associate Certificate',
                description: `Mastering the power of structured query language (SQL). with DataCamp Certification
                This certification signifies my proficiency in leveraging sql to extract and analyze data from any database.
                also includes the ability to write complex queries to perform data manipulation and analysis.
                `,
    
                description_two: `This is my proudest achievement as a result of my hard work and dedication to learning and mastering SQL.
                `,
                provider: 'DataCamp',
                date: 'April 2024',
                credential_link: 'https://www.datacamp.com/certificate/SQA0019952077107'
            },
            {
                id: 2,
                title: 'AWS Cloud Technical Essentials ',
                description: `Familiarizing the AWS Cloud platform and its core services. This certification validates my 
                understanding of the AWS Cloud platform and its core services, including compute, storage, database, and networking. 
                It also covers the basics of cloud security, compliance, and the shared responsibility model. 
                Participants will learn how to use the AWS Management Console to create and manage AWS resources, and 
                how to deploy a simple web application on the AWS Cloud platform.
                `,
                provider: 'Coursera',
                date: 'June 2024',
                credential_link: 'https://www.coursera.org/account/accomplishments/verify/DFLPL5VQD38M'
            },
            {

                id: 3,
                title: 'React Certificate',
                description: `This certification validates mastery in constructing web applications utilizing React, a 
                premier JavaScript library. Encompassing fundamental topics such as React Components, Props, State, 
                Hooks, Router, and Context, this course equips learners with essential skills crucial for proficient 
                React development. Participants gain expertise in handling these components effectively within React 
                applications, establishing a solid foundation for advanced web development endeavors.
                
                `,

                description_two: `This course also teaches us how to develop a web application with UX/UI design 
                principles in mind, and avoid problems with performance and security. Additionally, all these 
                topics are included in creating a project throughout the course.`,
                provider: 'Scrimba',
                date: 'October 2024',
                credential_link: 'https://www.coursera.org/account/accomplishments/verify/PQ8T4E4RXJ56'
            },
            {
                id: 4,
                title: 'Data Engineer Course',
                description: `This course is designed to provide a comprehensive understanding of data engineering, 
                including the principles of data management, data processing, and data analysis. 
                The course covers a wide range of topics, including data modeling, data warehousing, data integration, 
                and data visualization. Participants will learn how to design and implement data engineering solutions 
                using a variety of tools and technologies, including SQL, and Python.`,

                description_two: `The length of this course is 57 hours and it is self-paced.`,
                provider: 'DataCamp',
                date: 'January'
            },
            {
                id: 5,
                title: 'Backend Web Development',
                description: `This course spans 15 days, with daily sessions of 5 hours each, focused on backend web development. 
                This course covers the basics of backend web development, including the use of databases, 
                server-side programming, and web security.
                The course also covers the principles of RESTful API design and the use of authentication and 
                authorization mechanisms to secure web applications.`,
                description_two: `The technologies used in this course are Node.js, Express, MongoDB, and EJS templating engine.
                this course is eye opener for me to learn backend web development. and this is my first time to 
                learn backend web development.`,
                provider: 'Bayan Academy',
                date: 'January 2023'
            },
            {
                id: 6,
                title: 'Javascript Training',
                description: `This course also spans 15 days, with daily sessions of 5 hours each, focused on JavaScript programming.
                This course covers the basics of JavaScript programming, including the use of variables, data types, functions, and etc.
                It covers a lot of topic about what we need to know about JavaScript programming.`,
                provider: 'Bayan Academy',
                date: 'April 2023'
            },
            {
                id: 7,
                title: 'Networking Essential Certificate',
                description: `This course is designed to provide a comprehensive understanding of networking essentials, 
                including the principles of networking, network security, and network management. As you can see in the image, 
                these are the topics covered throughout the course. Additionally, this certificate fulfills one of my requirements 
                for passing a subject, specifically the networking subject.`,
                provider: 'Cisco Networking Academy',
                date: 'June 2023'
            },
            {
                id: 8,
                title: 'Introduction to Cisco Packet Tracer',
                description: `This course is introduction to Cisco Packet Tracer how to use the application interface 
                and how to use the tools in the application. This course is a prerequisite for the Networking Essential 
                Certificate`,
                provider: 'Cisco Networking Academy',
                date: 'June 2023'
            },
        ]
    }
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
            className="mySwiper w-[25rem] h-auto md:w-[35rem] lg:w-[45rem] xl:w-[55rem] rounded-md relative"
        >
            <SwiperSlide>
                <Image 
                    src={sql_cert} 
                    alt="sql_cert" 
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src={aws_cert} 
                    alt="aws_cert" 
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src={react_cert} 
                    alt="react_cert" 
                    className='object-contain w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src={data_eng_sql} 
                    alt="data_eng_sql"
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src={backend_cert} 
                    alt="backend_cert" 
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src={javascript_training} 
                    alt="javascript_training"
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    src={networking_essential_cert} 
                    alt="networking_essential_cert" 
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image 
                    src={intro_in_network_cert} 
                    alt="intro_in_network_cert" 
                    className='object-cover w-full h-full'
                />
            </SwiperSlide>
            <div className='absolute top-2 left-2 z-[2] rounded-xl flex items-center gap-2 bg-slate-800/70 p-2 px-4'>
                <MdSwipe  className='text-white'/>
                <p className='font-karla text-white'>Slide the image</p>
            </div>
        </Swiper>
        <div className='w-[100%] px-5'>
        {
            dataSample?.data.map((data, index) => (
                <div key={data.id} className={`${currentSlide === index ? 'block': 'hidden'}`}>
                    <h2 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        className={`text-2xl font-karla font-extrabold 
                        ${isDark ? 'text-brand-primary' : 'text-white'}`}>
                            {data.title}
                    </h2>
                    <div className='flex justify-between mt-2'>
                        <h3 
                            data-aos="fade-right" 
                            data-aos-easing="ease-in-back"
                            data-aos-delay="400"
                            className={`font-ubuntu md:text-lg font-medium ${isDark ? 'text-white' : 'text-gray-300'}`}>{data.provider}</h3>
                        <div 
                            data-aos="fade-right" 
                            data-aos-easing="ease-in-back"
                            data-aos-delay="400"
                            className='flex gap-2'>
                            <ClockCircleOutlined className={`${isDark ? 'text-brand-primary' : 'text-gray-300'}`} />
                            <h4 className={`font-ubuntu md:text-lg font-medium ${isDark ? 'text-white' : 'text-gray-300'}`}>{data.date}</h4>
                        </div>
                    </div>
                    <p 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-back"
                        data-aos-delay="500"
                        className={`mt-5 font-ubuntu md:text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-200'}`}>
                        {data.description}
                    </p>
                    <p 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in-back"
                        data-aos-delay="600"
                        className={`mt-5 font-ubuntu md:text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-200'}`}>
                        {data?.description_two}
                    </p>
                    <div className='flex items-center justify-center md:justify-end mt-5'>
                    {
                        data?.credential_link && (
                            <a 
                                data-aos="fade-right" 
                                data-aos-easing="ease-in-back"
                                data-aos-delay="700"
                                href={data.credential_link} 
                                target='_blank' rel='noreferrer' 
                                className={`font-ubuntu md:text-lg font-medium cursor-pointer ${isDark ? 'text-white': 'text-blue-400'}`}>
                                View Credential
                            </a>
                        )

                    }
                    </div>
                </div>
                
            ) || 'No data')
        }
    </div>

</section>
  )
}
