import React from 'react';
import CareerTableData from './CareerTableData';
import { TrainerCareerRequestDto } from '../../types/swagger/model/trainerCareerRequestDto';

interface ICareer {
  [key: string]: string | boolean | (() => void);
  company: string;
  work: string;
  startDate: string;
  endDate: string;
  working: 'true' | 'false';
}

interface ICareerListTableProps {
  careerList: TrainerCareerRequestDto[];
  handleDeleteCareer: (idx: number) => void;
}

function CareerListTable({
  careerList,
  handleDeleteCareer,
}: ICareerListTableProps) {
  const tableHead = ['회사명', '담당 업부', '입사', '퇴사', '-'];
  return (
    <div className="overflow-x-auto">
      <table className="mt-2 w-full border-collapse overflow-x-scroll border-2 border-main text-center">
        <thead>
          <tr className="bg-purple-100 py-2">
            {tableHead.map((title) => (
              <th
                className="min-w-12 whitespace-nowrap border border-main px-4 py-2"
                key={title}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {careerList.map((c, idx) => (
            <CareerTableData
              key={c.company}
              career={c}
              handleDeleteCareer={() => handleDeleteCareer(idx)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CareerListTable;
