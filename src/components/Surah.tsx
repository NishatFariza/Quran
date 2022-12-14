import { Tooltip } from "antd";
import React from "react";

interface PropsType {
  arabic_name: string;
  english_name: string;
  meaning: string;
  number_of_verses: number;
  serial: number;
  revelation_place: string;
  
}

const Surah: React.FC<PropsType> = ({
  arabic_name,
  english_name,
  meaning,
  number_of_verses,
  serial,
  revelation_place,
  
}) => {
  return (
    <div className="flex gap-5 p-4 border group cursor-pointer bg-slate-50 border-slate-300 rounded">
      <div className="flex flex-col items-center gap-2">
        <div className="grid place-content-center w-10 h-10 mt-[10px] text-xl group-hover:text-white transition-all duration-300 transform rotate-45 rounded-md  group-hover:bg-primary bg-slate-300 text-slate-800">
          <span className="transform -rotate-45">{serial}</span>
        </div>

        <Tooltip title="Number of verse" color="cyan" placement="bottom">
          <span className="mt-2 font-semibold text-gray-600">
            {number_of_verses}
          </span>
        </Tooltip>
      </div>

      <div>
        <h3 className="text-xl">
          {arabic_name} ({english_name})
        </h3>
        <Tooltip title="The meaning of this surah">
          <span>{meaning}</span>
        </Tooltip>
        <Tooltip title="The place of revelation">
          <p>{revelation_place}</p>
        </Tooltip>
      </div>
    </div>
  );
};

export default Surah;
