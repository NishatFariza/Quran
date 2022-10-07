import React from 'react'



interface PropsType{
    name:string;
    meaning: string;
    serial:number;
}

const Surah: React.FC<PropsType> = ({name, meaning, serial}) => {
  return (
    <div className='flex gap-5 p-4 border group bg-slate-50 border-slate-300 rounded'>

        <div className='grid place-content-center w-10 h-10 mt-[10px] text-xl group-hover:text-white transition-all duration-300 transform rotate-45 rounded-md  group-hover:bg-primary bg-slate-300 text-slate-800'>
        <span className="transform -rotate-45">{serial}</span>
        </div>

        <div>
            <h3>{name}</h3>
            <p>{meaning}</p>
        </div>

    </div>
  )
}

export default Surah