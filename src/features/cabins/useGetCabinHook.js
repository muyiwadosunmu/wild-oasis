import {  useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useGetCabins() {
    const {
        isLoading,
        data: cabins,
        error,
      } = useQuery({
        queryKey: ["cabins"],
        // We could use plain fetch API here
        queryFn: getCabins,
      });
      return {isLoading, cabins, error}
}