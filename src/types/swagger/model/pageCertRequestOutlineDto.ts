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
import { CertRequestOutlineDto } from './certRequestOutlineDto';
import { PageableObject } from './pageableObject';
import { SortObject } from './sortObject';

export interface PageCertRequestOutlineDto { 
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Array<CertRequestOutlineDto>;
    number?: number;
    sort?: SortObject;
    numberOfElements?: number;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}