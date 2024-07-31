import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://obi.victornwadinobi.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchPrograms = async () => {
  const response = await axiosInstance.get("/get/programs"); 
  return response.data.data;
};

export const fetchProgram = async (id:string | undefined) => {
  const response = await axiosInstance.get(`/view/program?programId=${id}`); 
  return response.data.data.program;
};

export const fetchTestimonials = async () => {
  const response = await axiosInstance.get("/get/testimonies"); 
  return response.data.data;
};
export const fetchPosts = async () => {
  const response = await axiosInstance.get("/blog/posts"); 
  return response.data.data;
};

export const fetchPost = async (id:string | undefined) => {
  const response = await axiosInstance.get(`/view/single/blog/post?post_id=${id}`); 
  return response.data.data;
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apply = async (data: any) => {
  const response = await axiosInstance.post(`/applicant`, data);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const donate = async (data: any) => {
  const response = await axiosInstance.post(`/donate`, data);
  return response.data;
};

