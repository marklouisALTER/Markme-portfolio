import React from 'react'
import { useThemeStore } from '../../../Store/ThemeManagement'
import { Image } from 'antd'
import backend_cert from '../../../assets/images/certificate/backend_web_cert.png'
import data_eng_sql from '../../../assets/images/certificate/data_eng_sql.jpg'
import intro_in_network_cert from '../../../assets/images/certificate/intro_in_network_cert.png'
import javascript_training from '../../../assets/images/certificate/javascript_training.png'
import networking_essential_cert from '../../../assets/images/certificate/networking_essential_cert.png'
import react_cert from '../../../assets/images/certificate/react_cert.jpg'
import aws_cert from '../../../assets/images/certificate/aws_certificate.png'
import sql_cert from '../../../assets/images/certificate/sql_cert.jpg'

type CertificateType = {
    id: number;
    title: string;
    image: string;
}

export const ImgCert: React.FC = () => {
    const isDark = useThemeStore(state => state.isDark)

    const data: CertificateType[] = [
        {
            id: 1,
            title: 'AWS Certified Cloud Practitioner',
            image: aws_cert,
        },
        {
            id: 2,
            title: 'SQL for Data Science',
            image: sql_cert,
        },
        {
            id: 3,
            title: 'Introduction to Networking',
            image: intro_in_network_cert,
        },
        {
            id: 4,
            title: 'Networking Essentials',
            image: networking_essential_cert,
        },
        {
            id: 5,
            title: 'JavaScript Training',
            image: javascript_training,
        },
        {
            id: 6,
            title: 'React Certification',
            image: react_cert,
        },
        {
            id: 7,
            title: 'Data Engineering with SQL',
            image: data_eng_sql,
        },
        {
            id: 8,
            title: 'Backend Web Development',
            image: backend_cert,
        },
    ]

    return (
        <section className='w-full grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {data.map((item, index) => (
                <article key={index} className={`group rounded-lg flex flex-col gap-3 items-center
                    transition-all delay-50 ease-in-out hover:cursor-pointer p-3 group hover:scale-105 shadow-xl shadow-spread-xl
                    ${isDark ? 'bg-[#101d2e] hover:bg-brand-primary ' : 'bg-brand-primary hover:bg-brand-secondary'}`}>
                        <div className='w-full flex flex-col gap-2'>
                            <Image
                                src={item.image}
                                alt={item.title}
                                className='rounded-lg w-full h-50 object-cover'
                                style={{ objectFit: 'cover', height: '200px' }} 
                            />
                        </div>
                    <div>
                        <h3 className={`font-ubuntu text-center text-sm md:text-[17px] lg:text-[18px] mb-1 md:mb-2 ${isDark ? 'text-brand-primary group-hover:text-white' : 'text-white'}`}>{item.title}</h3>
                    </div>
                </article>
            ))}
        </section>
    )
}
