import { useQuery } from "@tanstack/react-query";
import { fetchProgram, fetchPrograms } from "./api";

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

export function useProgram(id:string | undefined) {
  const {
    isLoading,
    data: program,
    error,
  } = useQuery({
    queryKey: [id],
    queryFn: () => fetchProgram(id),
  });

  return { isLoading, program, error };
}
