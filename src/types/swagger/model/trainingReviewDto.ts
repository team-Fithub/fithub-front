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
import { UserNicknameAndProfileDto } from './userNicknameAndProfileDto';

/**
 * 트레이닝 상세조회에서 후기 리스트 조회 시에 사용하는 dto - 후기 남긴 사용자 정보 포함
 */
export interface TrainingReviewDto { 
    reviewId?: number;
    userInfo?: UserNicknameAndProfileDto;
    reserveDateTime?: Date;
    content?: string;
    star?: number;
    createdDate?: Date;
    modifiedDate?: Date;
}