"use client";

import React, { useEffect, useRef  } from 'react';

import { ProgramDay } from 'Resources';

interface ProgramUnitProps {
    program: ProgramDay;
    index: number;
}

const ProgramUnit: React.FC<ProgramUnitProps> = ({ program, index }) => {  
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const timer = setTimeout(() => {
          if (ref.current) {
            ref.current.classList.add("visible");
          }
        }, index * 300); // Verzögerung für jeden Tag
    
        return () => clearTimeout(timer);
      }, [index]);
  return (
    <div className='programday' ref={ref}>
        <div className='programday--titlecontainer'>
            <h3 className='programday--title'>{program.day}</h3>
            <p>{program.date}</p>
        </div>
        <div className="programday--table-container">
          <table className="programday--table">
            
            <tbody>
              {program.units.map((unit) => (
                <tr key={unit.time}>
                  <td className='programmday--tabletime'>{unit.time}</td>
                  <td className='programmday--tabletopic'>{unit.topic} <span className='programmday--tablelocation'>{unit.location}</span></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        

    </div>
  );
};
  
export default ProgramUnit;