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
import { TrainerLicenseDto } from './trainerLicenseDto';

export interface TrainerSearchAllLicenseDto { 
    /**
     * 자격 사항 수
     */
    totalCounts?: number;
    /**
     * 자격 사항 정보
     */
    licenses?: Array<TrainerLicenseDto>;
}