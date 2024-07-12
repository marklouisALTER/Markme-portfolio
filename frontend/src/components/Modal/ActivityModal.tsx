import { ConfigProvider, Modal } from 'antd'
import React from 'react'

import { IoArrowBackOutline } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";

type activityModalProp = {
    open: boolean,
    close: ()=> void,
}

export const ActivityModal:React.FC<activityModalProp> = ({open, close}) => {
  return (
    <ConfigProvider
        theme={{
            components: {
            Modal: {
                contentBg: '#1e293a',
                headerBg: '#1e293a',
                titleColor: '#fff',
            },
            },
        }}
        >
        <Modal
            open={open}
            cancelButtonProps={{hidden:true}}
            okButtonProps={{hidden:true}}
            
            centered={false}
        >
            <div className='my-5'>
                <h4 className='font-karla text-xl'>Create Schedule</h4>
            </div>
            <div className='flex justify-end items-center gap-3'>
                <button className='bg-brand-primary px-3 py-1 font-karla text-white rounded-sm text-[16px] hover:bg-brand-secondary
                transition-all delay-50 ease-in-out focus:outline-none focus:ring-4 ring-brand-primary/30 flex items-center gap-1'>
                    <FaCalendarPlus />
                    Create
                </button>
                <button 
                    onClick={close}
                    className='bg-brand-secondary px-3 py-1 font-karla text-white rounded-sm text-[16px] hover:bg-[#1a293a]/50
                    transition-all delay-50 ease-in-out focus:outline-none focus:ring-4 ring-brand-primary/30 flex items-center gap-1'>
                    <IoArrowBackOutline />
                    Close
                </button>
            </div>
        </Modal>
    </ConfigProvider>
  )
}
