import React from 'react';

import { ProgramDay } from 'Resources';

interface ProgramUnitProps {
    program: ProgramDay;
    index: number;
}

const ProgramUnit: React.FC<ProgramUnitProps> = ({ program, index }) => {  
  return (
    <div 
      className='programday' 
      style={{ '--animation-delay': `${index * 300}ms` } as React.CSSProperties}
    >
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