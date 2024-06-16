import React from 'react'
import { InfoCert } from './Certificate_Section/InfoCert'
import { HiQueueList } from "react-icons/hi2";


import { HiSquares2X2 } from "react-icons/hi2";
import { useActiveImgBtnStore, useActiveListBtnStore } from '../../Store/ActiveButton';
import { ImgCert } from './Certificate_Section/ImgCert';


export const Certification:React.FC = () => {

    const { isListBtnActive ,setListBtnActive } = useActiveListBtnStore();
    const { isImgbtnActive, setImgBtnActive } = useActiveImgBtnStore();

    console.log(isListBtnActive);

    return (
    <section className='flex flex-col items-center justify-end'>
        <div className='flex items-center border self-end rounded-full w-36 overflow-hidden'>
            <button className={`w-full h-9 flex justify-center align-center ${isListBtnActive ? 'bg-[#101d2e]': 'bg-transparent'}`}
                onClick={() => {
                    if(!isListBtnActive){
                        setListBtnActive();
                        setImgBtnActive();
                    }
                }}
            >
                <HiQueueList className='text-2xl text-white p-2 w-full h-full'/>
            </button>
            <button className={`w-full h-9 flex justify-center align-center ${isImgbtnActive ? 'bg-[#101d2e]': 'bg-transparent'}`}
                onClick={() => {
                    if(!isImgbtnActive){
                        setImgBtnActive();
                        setListBtnActive();
                    }
                }}
            >
                <HiSquares2X2 className='text-2xl text-white p-2 w-full h-full'/>
            </button>
        </div>
        {isImgbtnActive ? <ImgCert /> : <InfoCert />

        }
    </section>
  )
}
