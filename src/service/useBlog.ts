import { useQuery } from "@tanstack/react-query";
import { fetchPost, fetchPosts } from "./api"; 

export function useBlog() {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchPosts,
  });

  return { isLoading, posts, error };
}

export function useSingleBlog(id:string | undefined) {
  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: [id],
    queryFn: () => fetchPost(id),
  });

  return { isLoading, post, error };
}



