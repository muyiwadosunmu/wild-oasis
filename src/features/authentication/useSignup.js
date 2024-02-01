import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { signUp as signUpApi } from "../../services/apiAuth";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,

    onSuccess: () => {
      toast.success("Account successfully created! Please verify the new account from the user's email address")
    },
  });

  return { signUp, isLoading };
}
