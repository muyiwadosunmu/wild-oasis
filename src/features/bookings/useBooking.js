import { useQuery } from "@tanstack/react-query";
import {useParams} from 'react-router-dom';
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
    const {bookingId} = useParams()
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false //By default react query tries to fetch data 3 times
  });

  return { isLoading, error, booking };
}
