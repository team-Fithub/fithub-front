import { useState } from 'react';
import { deleteLike, postLike } from '../apis/post';

const useLike = (postId: string, liked: boolean, defaultCount: number) => {
  const [isLiked, setLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(defaultCount);

  const toggleLike = async () => {
    // 먼저 UI 업데이트
    setLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);

    try {
      let response;
      if (!isLiked) {
        // 현재 상태가 '좋아요'가 아니었으므로, 좋아요를 추가하는 API 호출
        response = await postLike(postId);
      } else {
        // 현재 상태가 '좋아요'였으므로, 좋아요를 제거하는 API 호출
        response = await deleteLike(postId);
      }

      // 응답 상태가 200이 아니면 롤백
      if (response.status !== 200) {
        setLiked(isLiked);
        setLikesCount(isLiked ? likesCount + 1 : likesCount - 1);
      }
    } catch (error) {
      console.error('Error toggling like', error);
      // 에러 발생 시 롤백
      setLiked(isLiked);
      setLikesCount(isLiked ? likesCount + 1 : likesCount - 1);
    }
  };

  return { isLiked, likesCount, toggleLike };
};

export default useLike;