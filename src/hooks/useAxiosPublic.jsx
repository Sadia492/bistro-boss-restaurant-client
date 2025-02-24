import axios from "axios";
import React from "react";

const axiosPublic = axios.create({
  baseURL: "http://localhost:9000",
});
export default function useAxiosPublic() {
  return axiosPublic;
}
