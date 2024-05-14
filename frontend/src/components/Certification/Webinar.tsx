import React from 'react'
import { Image } from 'antd' 

import blockchain_event from '../../assets/images/webinar/blockchain_webinar.jpg'
import devfest_event from '../../assets/images/webinar/devfest_event.jpg'
import python_event from '../../assets/images/webinar/python_webinar.jpg'
import aws from '../../assets/images/webinar/aws_cert.png'
import fwdp_webinar from '../../assets/images/webinar/fwdp_webinar.jpg'

export const Webinar:React.FC = () => {

    return (
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='flex flex-col gap-1 p-2 border rounded-lg hover:scale-105 transition-all delay-100 ease-in-out'>
                <Image src={blockchain_event} alt='BlockChain Event' className='rounded-lg' />
                <h6 className='text-white text-sm md:text-lg text-center font-karla font-medium'>Blockchain Campus Conference</h6>
            </div>
            <div className='flex flex-col gap-1 p-2 border rounded-lg hover:scale-105 transition-all delay-100 ease-in-out'>
                <Image src={devfest_event} alt='DevFest Event' className='rounded-lg' />
                <h6 className='text-white text-sm md:text-lg text-center font-karla font-medium'>DevFest Cloud Manila</h6>
            </div>
            <div className='flex flex-col gap-1 p-2 border rounded-lg hover:scale-105 transition-all delay-100 ease-in-out'>
                <Image src={python_event} alt='Python Event' className='rounded-lg' />
                <h6 className='text-white text-sm md:text-lg text-center font-karla font-medium'>Pycon PH</h6>
            </div>
            <div className='flex flex-col gap-1 p-2 border rounded-lg hover:scale-105 transition-all delay-100 ease-in-out'>
                <Image src={aws} alt='AWS Certification' className='rounded-lg' />
                <h6 className='text-white text-sm md:text-lg text-center font-karla font-medium'>Awsome Day</h6>
            </div>
            <div className='flex flex-col gap-1 p-2 border rounded-lg hover:scale-105 transition-all delay-100 ease-in-out'>
                <Image src={fwdp_webinar} alt='FWD Philippines Webinar' className='rounded-lg' />
                <h6 className='text-white text-sm md:text-lg text-center font-karla font-medium'>FWDP Monthly Event</h6>
            </div>
        </section>
    )
}
