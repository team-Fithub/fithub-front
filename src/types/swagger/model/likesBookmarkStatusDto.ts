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

export interface LikesBookmarkStatusDto { 
    /**
     * 게시글 id
     */
    postId?: number;
    /**
     * 로그인한 사용자의 게시글 좋아요 여부 확인
     */
    likesStatus?: boolean;
    /**
     * 로그인한 사용자의 게시글 북마크 여부 확인
     */
    bookmarkStatus?: boolean;
}