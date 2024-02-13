/**
 * Fithub API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * 트레이너의 트레이닝 예약 정보 확인
 */
export interface TrainersReserveInfoDto { 
    /**
     * 트레이닝 id
     */
    id?: number;
    /**
     * 트레이닝 제목
     */
    title?: string;
    /**
     * 트레이닝 예약자 이름
     */
    userName?: string;
    /**
     * 예약한 트레이닝 날짜, 시간
     */
    trainingDateTime?: Date;
    /**
     * 트레이닝을 예약한 날짜, 시간
     */
    createdDateTime?: Date;
    /**
     * 트레이닝 진행 상황(진행 전, 진행중, 진행완료, 취소)
     */
    status?: TrainersReserveInfoDto.StatusEnum;
    /**
     * 트레이닝 결제 금액
     */
    price?: number;
}
export namespace TrainersReserveInfoDto {
    export type StatusEnum = 'BEFORE' | 'START' | 'COMPLETE' | 'CANCEL' | 'NOSHOW';
    export const StatusEnum = {
        BEFORE: 'BEFORE' as StatusEnum,
        START: 'START' as StatusEnum,
        COMPLETE: 'COMPLETE' as StatusEnum,
        CANCEL: 'CANCEL' as StatusEnum,
        NOSHOW: 'NOSHOW' as StatusEnum
    };
}