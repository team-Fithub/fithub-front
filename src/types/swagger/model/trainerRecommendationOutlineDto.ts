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
import { TrainerRecommendationDto } from './trainerRecommendationDto';

export interface TrainerRecommendationOutlineDto { 
    /**
     * 회원의 관심사
     */
    interest?: TrainerRecommendationOutlineDto.InterestEnum;
    /**
     * 트레이너 추천 리스트
     */
    trainerRecommendationList?: Array<TrainerRecommendationDto>;
}
export namespace TrainerRecommendationOutlineDto {
    export type InterestEnum = 'PILATES' | 'HEALTH' | 'PT' | 'CROSSFIT' | 'YOGA';
    export const InterestEnum = {
        PILATES: 'PILATES' as InterestEnum,
        HEALTH: 'HEALTH' as InterestEnum,
        PT: 'PT' as InterestEnum,
        CROSSFIT: 'CROSSFIT' as InterestEnum,
        YOGA: 'YOGA' as InterestEnum
    };
}