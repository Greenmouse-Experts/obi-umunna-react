import { useQuery } from "@tanstack/react-query";
import {  fetchTestimonials } from "./api"; 

export function useTestimonials() {
  const {
    isLoading,
    data: testimonials,
    error,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });

  return { isLoading, testimonials, error };
}


