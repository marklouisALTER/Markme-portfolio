import React from 'react'
import { Image } from 'antd';
import sample_flyer_one from '../../assets/images/Design/flyer_one.jpg';
import sample_flyer_two from '../../assets/images/Design/flyer_two.jpg';
import sample_flyer_three from '../../assets/images/Design/flyer_three.png';
import sample_flyer_four from '../../assets/images/Design/flyer_four.png';
import sample_design from '../../assets/images/Design/sample_design.png';
import sample_design_two from '../../assets/images/Design/sample_design_two.png';
import { useThemeStore } from '../../Store/ThemeManagement';

export const DesignProject:React.FC = () => {
  const isDark = useThemeStore(state => state.isDark);
  
  const data = [
    {
      id: 1,
      title: 'Sample Design Flyer',
      image: sample_flyer_one,
    },
    {
      id: 2,
      title: 'Sample Design Flyer',
      image: sample_flyer_two,
    },
    {
      id: 3,
      title: 'Sample Design Flyer',
      image: sample_flyer_three,
    },
    {
      id: 4,
      title: 'Sample Design Flyer',
      image: sample_flyer_four,
    },
    {
      id: 5,
      title: 'Sample Portfolio Design',
      image: sample_design,
    },
    {
      id: 6,
      title: 'Sample Portfolio Design(1x)',
      image: sample_design_two,
    },
  ]
  
  return (


    <div className='w-full grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {
        data.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col gap-1 p-3 rounded-lg hover:scale-105 transition-all delay-100 ease-in-out 
            justify-center ${isDark ? 'bg-[#101d2e]': 'border-brand-primary bg-brand-primary'}`}
          >
            <Image 
              src={item.image} 
              alt='BlockChain Event' 
              className={`rounded-lg object-contain p-2 max-h-[200px] ${isDark ? 'bg-white' : 'bg-brand-secondary'}`}
            />
                <h6 className={`text-sm md:text-lg text-center font-karla font-medium ${isDark ? 'text-white' : 'text-white'}`}>{item.title}</h6>
            </div>
        ))
      }
    </div>
  )
}
