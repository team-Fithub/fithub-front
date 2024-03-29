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
 * 트레이너 인증 요청 시 작성하는 경력 사항
 */
export interface TrainerCareerRequestDto { 
    /**
     * 회사명
     */
    company: string;
    /**
     * 회사 주소
     */
    address: string;
    /**
     * 경도
     */
    longitude?: number;
    /**
     * 위도
     */
    latitude?: number;
    /**
     * 담당 업무
     */
    work: string;
    /**
     * 입사년월
     */
    startDate: string;
    /**
     * 퇴사년월
     */
    endDate?: string;
    /**
     * 현 근무지 재직 여부
     */
    working: boolean;
}