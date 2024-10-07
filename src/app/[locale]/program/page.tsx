import program from 'data/program';

import ProgramUnit from '@/components/ProgramUnit';

import { getIntl } from "@/lib/intl";

type ProgramProps = {
  params: { locale: string };
}

// const Program: React.FC = () => {
export default async function Program({ params }: ProgramProps) {
  const { locale } = params;
  const intl = await getIntl(locale);

  return (
    <div className='page'>
        <h1>{intl.formatMessage({ id: "header.program" })}</h1>
        <div className='programs'>
            {
                program.map((dayData, index) => (
                    <ProgramUnit key={dayData.day} program={dayData} index={index}/>
                ))
            }
        </div>
        
    </div>
  );
};
  
