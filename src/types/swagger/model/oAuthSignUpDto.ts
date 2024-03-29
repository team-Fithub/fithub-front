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

export interface OAuthSignUpDto { 
    email: string;
    name: string;
    phone: string;
    bio?: string;
    gender: OAuthSignUpDto.GenderEnum;
    /**
     * 소셜 회원가입, 로그인시에 저장된 제공자 + id
     */
    providerId: string;
    /**
     * 관심사(최소 1개 이상). ex) PILATES, HEALTH, PT, CROSSFIT, YOGA
     */
    interests: Array<OAuthSignUpDto.InterestsEnum>;
}
export namespace OAuthSignUpDto {
    export type GenderEnum = 'F' | 'M' | 'UNDEFINED';
    export const GenderEnum = {
        F: 'F' as GenderEnum,
        M: 'M' as GenderEnum,
        UNDEFINED: 'UNDEFINED' as GenderEnum
    };
    export type InterestsEnum = 'PILATES' | 'HEALTH' | 'PT' | 'CROSSFIT' | 'YOGA';
    export const InterestsEnum = {
        PILATES: 'PILATES' as InterestsEnum,
        HEALTH: 'HEALTH' as InterestsEnum,
        PT: 'PT' as InterestsEnum,
        CROSSFIT: 'CROSSFIT' as InterestsEnum,
        YOGA: 'YOGA' as InterestsEnum
    };
}