import React, { FC, useEffect, useState } from 'react';
import { CareerType } from './type';
import CareerInput from './CareerInput';
import { addTrainerCareer } from '../../../apis/trainer';
import NewCareer from './NewCareer';

interface Prop {
  list: CareerType[] | undefined;
}

interface NewCareerType {
  company: string;
  work: string;
  startDate: string;
  endDate: string;
}

const Career: FC<Prop> = ({ list }) => {
  const [careerList, setCareerList] = useState<any | undefined>(list);
  const [newCareer, setNewCareer] = useState<NewCareerType | null>(null);

  useEffect(() => {
    setCareerList(list);
  }, [list]);

  const showNewCareerInput = async () => {
    setNewCareer({
      company: '',
      work: '',
      startDate: '',
      endDate: '',
    });
  };

  const addCareer = async () => {
    const newCareerId = await addTrainerCareer({
      address: '서울특별시 마포구 등교동 205-17',
      working: true,
      longitude: 126.919286,
      latitude: 37.557453126,
      ...newCareer,
    });

    setCareerList([
      ...careerList,
      {
        careerId: newCareerId,
        company: newCareer?.company,
        work: newCareer?.work,
        startDate: newCareer?.startDate,
        endDate: newCareer?.endDate,
      },
    ]);

    // 초기화
    setNewCareer(null);
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-row">
        <div className="relative flex w-[100px] items-center">
          <p className="absolute top-[8px]">경력</p>
        </div>

        <div className="flex flex-1 flex-col">
          {careerList?.map((li: CareerType) => (
            <div className="flex flex-col" key={li.careerId}>
              <CareerInput
                careerId={li?.careerId}
                setCareerList={setCareerList}
              />
            </div>
          ))}
          {newCareer && <NewCareer data={newCareer} setData={setNewCareer} />}

          <div className="flex justify-start">
            <button
              type="button"
              className="mt-[1rem] text-gray-400"
              onClick={newCareer ? addCareer : showNewCareerInput}
            >
              {newCareer ? '완료' : '추가하기'}
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4 mt-4 w-full border shadow-slate-500" />
    </section>
  );
};

export default Career;
