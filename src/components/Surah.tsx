import { Tooltip } from "antd";
import React from "react";

interface PropsType {
  arabic_name: string;
  english_name: string;
  meaning: string;
  number_of_verses: number;
  serial: number;
  revelation_place: string;
  bismillah_pre: boolean;
}

const Surah: React.FC<PropsType> = ({
  arabic_name,
  english_name,
  meaning,
  number_of_verses,
  serial,
  revelation_place,
  bismillah_pre,
}) => {
  return (
    <div className="flex gap-5 p-4 border group bg-slate-50 border-slate-300 rounded">
      <div>
        <div className="grid place-content-center w-10 h-10 mt-[10px] text-xl group-hover:text-white transition-all duration-300 transform rotate-45 rounded-md  group-hover:bg-primary bg-slate-300 text-slate-800">
          <span className="transform -rotate-45">{serial}</span>
        </div>
        <div>
          <Tooltip title="Number of verse">
            <span className="">{number_of_verses}</span>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3>
          {arabic_name}
          {english_name}
        </h3>
        {/* <p>{bismillah_pre}</p> */}
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
