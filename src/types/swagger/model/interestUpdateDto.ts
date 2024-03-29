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
 * 회원의 관심사 수정 dto
 */
export interface InterestUpdateDto { 
    /**
     * 관심사 삭제 여부
     */
    interestsDeleted: boolean;
    /**
     * interestsDeleted = true 일 때만 사용. 삭제되지 않는 관심사. ex) PILATES, HEALTH, PT, CROSSFIT, YOGA
     */
    unModifiedInterests?: Array<InterestUpdateDto.UnModifiedInterestsEnum>;
    /**
     * 관심사 추가 여부
     */
    interestsAdded: boolean;
    /**
     * 추가된 관심사. ex) PILATES, HEALTH, PT, CROSSFIT, YOGA
     */
    addedInterests?: Array<InterestUpdateDto.AddedInterestsEnum>;
}
export namespace InterestUpdateDto {
    export type UnModifiedInterestsEnum = 'PILATES' | 'HEALTH' | 'PT' | 'CROSSFIT' | 'YOGA';
    export const UnModifiedInterestsEnum = {
        PILATES: 'PILATES' as UnModifiedInterestsEnum,
        HEALTH: 'HEALTH' as UnModifiedInterestsEnum,
        PT: 'PT' as UnModifiedInterestsEnum,
        CROSSFIT: 'CROSSFIT' as UnModifiedInterestsEnum,
        YOGA: 'YOGA' as UnModifiedInterestsEnum
    };
    export type AddedInterestsEnum = 'PILATES' | 'HEALTH' | 'PT' | 'CROSSFIT' | 'YOGA';
    export const AddedInterestsEnum = {
        PILATES: 'PILATES' as AddedInterestsEnum,
        HEALTH: 'HEALTH' as AddedInterestsEnum,
        PT: 'PT' as AddedInterestsEnum,
        CROSSFIT: 'CROSSFIT' as AddedInterestsEnum,
        YOGA: 'YOGA' as AddedInterestsEnum
    };
}