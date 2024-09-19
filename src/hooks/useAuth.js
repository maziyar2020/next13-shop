// http req
import { getUserInfo,getUsersInfo } from "@/services/authServices";
// RQ
import { useQuery } from "@tanstack/react-query";

export const getUserDetail = () => useQuery({
    queryKey: ['get-user'],
    queryFn: getUserInfo,
    retry: false,
    refetchOnWindowFocus: true
})

export const getAllUsers = () => useQuery({
    queryKey: ['get-users'],
    queryFn: getUsersInfo,
    retry: false,
    refetchOnWindowFocus: true
})