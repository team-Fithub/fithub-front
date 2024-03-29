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
import { LikesInfoDto } from './likesInfoDto';

/**
 * 게시글 좋아요 정보 dto
 */
export interface LikedUsersInfoDto { 
    /**
     * 게시글 좋아요 수
     */
    likedCount?: number;
    /**
     * 게시글 좋아요 리스트
     */
    likedUsers?: Array<LikesInfoDto>;
}