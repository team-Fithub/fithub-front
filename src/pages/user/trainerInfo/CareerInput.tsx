import React, {
  useState,
  useRef,
  FC,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { CareerType } from './type';
import {
  deleteTrainerCareer,
  editTrainerCareer,
  fetchCareerInfo,
  fetchTrainerInfo,
} from '../../../apis/trainer';
import { handleDateToString } from '../../../utils/util';
import ConfirmationModal from '../../../components/modal/ConfirmationModal';

export enum InputTypes {
  company = 'company',
  work = 'work',
}
interface Prop {
  careerId: number;
  setCareerList: (data: any) => void;
}

const CareerInput: FC<Prop> = ({ careerId, setCareerList }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<CareerType>();
  const [deletingId, setDeletingId] = useState<number | undefined>();

  const getCareerInfo = useCallback(async () => {
    const res = await fetchCareerInfo(careerId);
    setData(res);
  }, [careerId]);

  useEffect(() => {
    getCareerInfo();
  }, [getCareerInfo]);

  const handleEdit = async () => {
    if (!isEditing) {
      // 데이터 수정
      inputRef.current?.focus();
    } else {
      // 수정한 데이터 제출
      if (!data) return;
      await editTrainerCareer(careerId, data);
    }
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: InputTypes) => {
    const { value } = e.target;
    const newData: any = { ...data };
    newData[type] = value;
    setData(newData);
  };

  const handleCareerDate = (date: Date, type: 'startDate' | 'endDate') => {
    const newData: any = { ...data };
    const strDate = handleDateToString(date);
    if (type === 'startDate') {
      if (date > new Date(newData.endDate)) {
        alert('올바른 입사날짜를 입력해주세요');
        return;
      }
      newData.startDate = strDate;
    }
    if (type === 'endDate') {
      if (new Date(newData.startDate) > date) {
        alert('올바른 퇴사날짜를 입력해주세요');
        return;
      }
      newData.endDate = strDate;
    }
    setData(newData);
  };

  const handleDelete = async () => {
    await deleteTrainerCareer(careerId);
    const updatedInfo = await fetchTrainerInfo();
    setCareerList(updatedInfo.data.trainerCareerList);
  };

  const deleteContent = (
    <div>
      <h2 className="mb-4 font-bold">경력을 삭제할까요?</h2>
      <div className="mb-4">
        <p>회사: {data?.company}</p>
        <p>업무: {data?.work}</p>
        <p>
          기간: {data?.startDate}~{data?.endDate}
        </p>
      </div>
    </div>
  );
  return (
    <>
      <div className="mb-[10px] flex items-center justify-between">
        <div className="bg-pink flex flex-1">
          <input
            type="company"
            value={data?.company}
            placeholder="회사명"
            ref={inputRef}
            readOnly={!isEditing}
            onChange={(e) => handleChange(e, InputTypes.company)}
            style={{
              width: '30%',
              marginRight: '1rem',
              paddingBottom: '3px',
              outline: 'none',
              borderBottom: isEditing ? '1px solid lightgrey' : 'none',
            }}
          />
          <input
            type="work"
            value={isEditing ? data?.work : `(${data?.work})`}
            placeholder="업무"
            readOnly={!isEditing}
            onChange={(e) => handleChange(e, InputTypes.work)}
            style={{
              width: '20%',
              marginRight: '1rem',
              paddingBottom: '3px',
              outline: 'none',
              borderBottom: isEditing ? '1px solid lightgrey' : 'none',
            }}
          />
          <div>
            {isEditing ? (
              <ReactDatePicker
                id="startDate"
                locale={ko}
                className="w-40 cursor-pointer rounded border border-main px-2 text-black"
                selected={data && new Date(data?.startDate)}
                onChange={(date: Date) => handleCareerDate(date, 'startDate')}
                dateFormat="yyyy-MM-dd"
              />
            ) : (
              data?.startDate
            )}
            ~
            {isEditing && data?.endDate ? (
              <ReactDatePicker
                id="startDate"
                locale={ko}
                className="w-36 cursor-pointer rounded border border-main px-2 text-black"
                selected={new Date(data.endDate)}
                onChange={(date: Date) => handleCareerDate(date, 'endDate')}
                dateFormat="yyyy-MM-dd"
              />
            ) : (
              data?.endDate || '현재'
            )}
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleEdit}
            className="h-[30px] w-[70px] rounded"
            style={{
              background: `${isEditing ? '#53dd5a' : '#d1d1d1'}`,
              color: `${isEditing ? 'white' : 'black'}`,
            }}
          >
            {isEditing ? '완료' : '수정'}
          </button>
          <button
            type="button"
            onClick={() => setDeletingId(data?.careerId)}
            className="bg ml-3 h-[30px] w-[70px] rounded bg-accent text-white  hover:bg-rose-400"
          >
            삭제
          </button>
        </div>
      </div>
      <ConfirmationModal
        isOpen={deletingId !== undefined}
        onClose={() => setDeletingId(undefined)}
        onConfirm={handleDelete}
        confirmText="확인"
        cancelText="취소"
        children={deleteContent}
      />
    </>
  );
};

export default CareerInput;
