import React from 'react'
import { useActiveMailModalBtnStore } from '../../Store/ActiveButton';
import { ConfigProvider, Modal } from 'antd';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export const EmailModal:React.FC = () => {

    const { setMailModalBtnActive, isMailModalBtnActive } = useActiveMailModalBtnStore();
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: '#101d2e'
          },
        },
      }}
    >
      <Modal 
          centered={true}
          open={isMailModalBtnActive} 
          // onCancel={}
          cancelButtonProps={{hidden:true}}
          okButtonProps={{hidden:true}}
          width={400}
          
      >
        <h5 className='text-brand-primary font-karla text-xl'>Here's my email</h5>
        <div className='w-full bg-slate-800 mt-6 flex items-center px-3 rounded-lg hover:bg-black/80 transition-all delay-50 ease-in-out'>
        <Paragraph copyable={{ text: 'marklouisbernando318@gmail.com' }} className='mt-3 font-karla text-white text-lg'>marklouisbernando318@gmail.com</Paragraph>
          {/* <p className='text-white font-karla text-lg'></p> */}
        </div>
          <div className='flex justify-end'>
            
            <button
              onClick={() => setMailModalBtnActive()}
              className='mt-5 text-white hover:bg-brand-secondary font-karla bg-brand-primary px-4 py-1 rounded-md
              transition-all delay-50 ease-in-out'
            >
              Close
            </button>
          </div>
      </Modal>
    </ConfigProvider>
  )
}
