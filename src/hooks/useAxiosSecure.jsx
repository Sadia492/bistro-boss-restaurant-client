import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

export default function useAxiosSecure() {
  return axiosSecure;
}
