import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";



export function useEditCabin() {
    const queryClient = useQueryClient()

    const { mutate: editCabin, isLoading: isEditing } = useMutation({
        // mutationFn: (newCabin) => createCabin(newCabin)
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
          toast.success("Cabin successfully edited");
          queryClient.invalidateQueries({
            queryKey: ["cabins"],
          });
        //   reset();
            // We didn't call the reset in the onSubmit handler
            // because we are doing it on success event
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
      return {queryClient, editCabin, isEditing}
}