import React from 'react'
import './style/loading.css'
const Loading:React.FC = () => {
    return (
        <div className='w-full h-screen dark:bg-slate-800 flex flex-col items-center justify-center gap-10'>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p className={`font-karla text-white`}>Wait for the website to load</p>
        </div>
    )
}

export default Loading;
