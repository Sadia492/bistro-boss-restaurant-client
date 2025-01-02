import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

export default function useCart() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: cartData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/carts/${user?.email}`);
      return data;
    },
  });
  return { cartData, isLoading, refetch };
}
