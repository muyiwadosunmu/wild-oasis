import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
// import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";


export function useCreateCabin() {
    // const {reset} = useForm()


const queryClient = useQueryClient();

const { mutate: createCabin, isLoading: isCreating } = useMutation({
  // mutationFn: (newCabin) => createCabin(newCabin)
  mutationFn: createEditCabin,
  onSuccess: () => {
    toast.success("New cabin successfully created");
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
    // reset();
    /**
     * We didn't call the reset in the onSubmit handler
     * because we are doing it on success event
     *  */
  },
  onError: (err) => {
    toast.error(err.message);
  },
});
return {createCabin, isCreating, queryClient}

}