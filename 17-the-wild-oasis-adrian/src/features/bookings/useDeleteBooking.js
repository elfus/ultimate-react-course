import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => {
      console.log(`useDeleteBooking: deleting ${bookingId}`);
      deleteBookingApi(bookingId);
    },
    onSuccess: (data) => {
      if (data) toast.success(`Booking #${data?.id} successfully delete`);
      else toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => toast.error("There was an error while checking out"),
  });

  return { deleteBooking, isDeletingBooking };
}
