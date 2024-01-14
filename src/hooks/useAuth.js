// http req
import { getUserInfo } from "@/services/authServices";
// RQ
import { useQuery } from "@tanstack/react-query";

export const getUserDetail = () => useQuery({
    queryKey: ['get-user'],
    queryFn: getUserInfo,
    retry: false,
    refetchOnWindowFocus: true
})