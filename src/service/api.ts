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

