import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutAPI } from "../../services/apiAuth";

export function useLogout() {
    const queryClient = useQueryClient()
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
        queryClient.removeQueries(); //we can specify but we're removing all from the cache
      navigate("/login", {replace:true});
    },
  });

  return { logout, isLoading };
}
