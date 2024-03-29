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

export interface CertRejectedRequestDto { 
    rejectLogId?: number;
    requestId?: number;
    userName?: string;
    userEmail?: string;
    rejectType?: CertRejectedRequestDto.RejectTypeEnum;
    reason?: string;
    requestDateTime?: Date;
    rejectedDateTime?: Date;
}
export namespace CertRejectedRequestDto {
    export type RejectTypeEnum = 'INVALID_CERTIFICATE' | 'UNPROVABLE_CAREER';
    export const RejectTypeEnum = {
        INVALIDCERTIFICATE: 'INVALID_CERTIFICATE' as RejectTypeEnum,
        UNPROVABLECAREER: 'UNPROVABLE_CAREER' as RejectTypeEnum
    };
}