import { Tooltip } from "antd";
import React from "react";

interface PropsType {
  name: string;
  meaning: string;
  serial: number;
}

const Surah: React.FC<PropsType> = ({ name, meaning, serial }) => {
  return (
    <div className="flex gap-5 p-4 border group bg-slate-50 border-slate-300 rounded">
      <div>
        <div className="grid place-content-center w-10 h-10 mt-[10px] text-xl group-hover:text-white transition-all duration-300 transform rotate-45 rounded-md  group-hover:bg-primary bg-slate-300 text-slate-800">
          <span className="transform -rotate-45">{serial}</span>
        </div>
        <div>
          <Tooltip title="Number of verse">
            <span className="">{serial}</span>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3>الفاتحة(Al-Fatiha)</h3>
        <Tooltip title="The meaning of this surah">
          <p>{meaning}</p>
        </Tooltip>

        <p>makkah</p>
      </div>
    </div>
  );
};

export default Surah;
