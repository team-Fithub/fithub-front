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
import { ApplicantInfoDto } from './applicantInfoDto';
import { TrainerCareerTempDto } from './trainerCareerTempDto';
import { TrainerLicenseTempImgDto } from './trainerLicenseTempImgDto';

/**
 * 관리자 - 트레이너 인증 요청 하나 조회 시 사용하는 상세 정보
 */
export interface CertRequestDetailDto { 
    id?: number;
    applicantInfoDto?: ApplicantInfoDto;
    /**
     * 인증 요성 시 넣은 자격증 리스트
     */
    licenseTempImgList?: Array<TrainerLicenseTempImgDto>;
    /**
     * 인증 요청 시 넣은 경력 리스트
     */
    careerTempList?: Array<TrainerCareerTempDto>;
}