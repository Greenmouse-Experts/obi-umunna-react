import { useQuery } from "@tanstack/react-query";
import { fetchPrograms } from "./api"; 

export function usePrograms() {
  const {
    isLoading,
    data: programs,
    error,
  } = useQuery({
    queryKey: ["programs"],
    queryFn: fetchPrograms,
  });

  return { isLoading, programs, error };
}
